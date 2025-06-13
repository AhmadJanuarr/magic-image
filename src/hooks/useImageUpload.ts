import { ChangeEvent, useCallback, useState } from "react";
import JSZip from "jszip";
import { toast } from "sonner";

export function useImageUpload() {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isConverting, setIsConverting] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState([]);
  const uploadMax = 10;
  const handleImageUploadChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    setIsUploading(true);
    try {
      if (files) {
        if (files.length > uploadMax) {
          toast.warning(`You can only upload up to ${uploadMax} images`);
          setIsUploading(false);
          return;
        }
        const processDelay = Math.random() * (3000 - 1500) + 1500;
        setTimeout(() => {
          const fileArray = Array.from(files);
          setSelectedImages(fileArray);

          setTimeout(() => {
            setIsUploading(false);
          }, 1000);
        }, processDelay);
      }
    } catch (error) {
      console.error(error);
      setIsUploading(false);
    }
  };

  const handleImageRemove = (index: number) => {
    const newImages = selectedImages.filter((_, i) => i !== index);
    console.log(newImages, "newImages");
    setSelectedImages(newImages);
  };

  const handleAddImage = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files);
      const totalImages = selectedImages.length + fileArray.length;

      if (totalImages > uploadMax) {
        toast.warning(`You can only upload up to ${uploadMax} images total`);
        return;
      }

      setSelectedImages([...selectedImages, ...fileArray]);
      toast.success(`images added`);
    }
  };

  const handleDownload = (blob: Blob, fileName: string) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
  };

  const convertSingle = useCallback(async (file: File, format: string): Promise<Blob | null> => {
    setIsConverting(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("format", format);

      const res = await fetch("/api/convert", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) {
        console.error("Failed convert:", await res.text());
        return null;
      }
      const blob = await res.blob();
      if (blob) {
        handleDownload(blob, `converted-${file.name.split(".")[0]}.${format}`);
      }
      return blob;
    } catch (err) {
      console.error("Error in convertSingle:", err);
      return null;
    } finally {
      setIsConverting(false);
    }
  }, []);

  const createAndDownloadZip = async (files: Array<{ file: File; blob: Blob | null }>, format: string) => {
    const zip = new JSZip();

    // Add each converted image to the zip
    files.forEach(({ file, blob }) => {
      if (blob) {
        const fileName = `converted-${file.name.split(".")[0]}.${format}`;
        zip.file(fileName, blob);
      }
    });

    // Generate and download the zip file
    const zipBlob = await zip.generateAsync({ type: "blob" });
    handleDownload(zipBlob, `converted-images-${new Date().getTime()}.zip`);
  };

  const convertMultiple = useCallback(
    async (files: File[], format: string): Promise<Array<{ file: File; blob: Blob | null }>> => {
      setIsConverting(true);
      try {
        const results: Array<{ file: File; blob: Blob | null }> = [];
        for (const file of files) {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("format", format);

          const res = await fetch("/api/convert", {
            method: "POST",
            body: formData,
          });

          if (!res.ok) {
            console.error("Failed convert:", await res.text());
            results.push({ file, blob: null });
            continue;
          }

          const blob = await res.blob();
          results.push({ file, blob });
        }

        // Create and download zip file with all converted images
        await createAndDownloadZip(results, format);
        return results;
      } catch (err) {
        console.error("Error in convertMultiple:", err);
        return [];
      } finally {
        setIsConverting(false);
      }
    },
    []
  );

  return {
    isUploading,
    selectedImages,
    isConverting,
    convertMultiple,
    setSelectedImages,
    handleImageUploadChange,
    handleImageRemove,
    handleAddImage,
    convertSingle,
  };
}
