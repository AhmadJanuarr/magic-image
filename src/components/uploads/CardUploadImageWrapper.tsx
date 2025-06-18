"use client";

import { useImageUpload } from "@/hooks/useImageUpload";
import { useState } from "react";
import { SelectedImagesList } from "../uploads/SelectedImagesList";
import { UploadPlaceholder } from "../uploads/UploadPlaceholder";
import { ActionsBar } from "./ActionsBar";

export const CardUploadImageWrapper = () => {
  const [selectedFormat, setSelectedFormat] = useState("webp");
  const [isProcessing, setIsProcessing] = useState(false);
  const {
    isUploading,
    file,
    setFile,
    handleImageUploadChange,
    handleImageRemove,
    handleAddImage,
    convertMultiple,
    convertSingle,
    handleDropzone,
  } = useImageUpload();

  const handleConvertImage = async () => {
    const processDelay = Math.random() * (3000 - 1500) + 1500;
    setIsProcessing(true);
    try {
      setTimeout(async () => {
        if (file.length === 1) {
          await convertSingle(file[0], selectedFormat);
        } else {
          await convertMultiple(file, selectedFormat);
        }
        setTimeout(() => {
          setIsProcessing(false);
        }, 1000);
      }, processDelay);
    } catch (error) {
      console.error("Error converting images:", error);
      setIsProcessing(false);
    }
  };

  return (
    <div
      className="w-full lg:w-5xl mx-auto rounded-xl relative p-1 border-2 border-dashed border-accent/20 z-10"
      onDrop={handleDropzone}
      onDragOver={handleDropzone}
    >
      <div className="w-full min-h-96 rounded-xl border-2 border-dashed border-accent/50 relative">
        {isProcessing && (
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50 rounded-xl">
            <div className="flex flex-col items-center gap-2">
              <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
              <p className="text-accent font-medium sub-heading">Converting images...</p>
            </div>
          </div>
        )}
        {file.length === 0 ? (
          <UploadPlaceholder handleImageChange={handleImageUploadChange} isUploading={isUploading} />
        ) : (
          <div className="w-full h-full p-3 lg:p-6 min-h-96 justify-between flex flex-col">
            <SelectedImagesList
              file={file}
              selectedFormat={selectedFormat}
              onFormatChange={setSelectedFormat}
              handleImageRemove={handleImageRemove}
            />
            <ActionsBar handleAddImage={handleAddImage} handleConvertImage={handleConvertImage} />
          </div>
        )}
      </div>
    </div>
  );
};
