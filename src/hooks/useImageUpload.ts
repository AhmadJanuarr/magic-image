import { ChangeEvent, useCallback, useState } from "react";
import JSZip from "jszip";
import { toast } from "sonner";
import { useDropzone } from "react-dropzone";

export function useImageUpload() {
  const [file, setFile] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isConverting, setIsConverting] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState([]);
  const uploadMax = 10;

  const handleDropzone = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      if (e.dataTransfer.files.length > 0) {
        const files = Array.from(e.dataTransfer.files);

        const validFiles = files.filter((file) => {
          const validTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
          return validTypes.includes(file.type);
        });

        if (validFiles.length === 0) {
          toast.error("Please drop only image files (JPEG, PNG, GIF, WEBP)");
          return;
        }

        // Check total files after adding new ones
        const totalFiles = file.length + validFiles.length;
        if (totalFiles > uploadMax) {
          toast.warning(`You can only upload up to ${uploadMax} images total`);
          return;
        }

        // Append new files to existing files
        setFile((prevFiles) => [...prevFiles, ...validFiles]);
        toast.success(`${validFiles.length} image(s) added successfully`);
      }
    } catch (error) {
      console.error("Error in handleDropzone:", error);
      toast.error("An error occurred while processing the files");
    }
  };

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
          setFile(fileArray);

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
    const newImages = file.filter((_, i) => i !== index);
    console.log(newImages, "newImages");
    setFile(newImages);
  };

  const handleAddImage = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files);
      const totalImages = file.length + fileArray.length;

      if (totalImages > uploadMax) {
        toast.warning(`You can only upload up to ${uploadMax} images total`);
        return;
      }

      setFile([...file, ...fileArray]);
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
    file,
    isConverting,
    handleDropzone,
    convertMultiple,
    setFile,
    handleImageUploadChange,
    handleImageRemove,
    handleAddImage,
    convertSingle,
  };
}
