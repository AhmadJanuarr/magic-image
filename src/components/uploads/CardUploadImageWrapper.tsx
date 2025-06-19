"use client";

import { useImageUpload } from "@/hooks/useImageUpload";
import { useState, useRef } from "react";
import { SelectedImagesList } from "../uploads/SelectedImagesList";
import { UploadPlaceholder } from "../uploads/UploadPlaceholder";
import { ActionsBar } from "./ActionsBar";

export const CardUploadImageWrapper = () => {
  const [selectedFormat, setSelectedFormat] = useState("webp");
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const dragCounter = useRef(0);
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

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current++;
    setIsDragging(true);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current--;

    // Only set dragging to false when we've completely left the drop zone
    if (dragCounter.current === 0) {
      setIsDragging(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current = 0;
    setIsDragging(false);
    handleDropzone(e);
  };

  return (
    <div
      className={`w-full lg:w-5xl mx-auto rounded-xl relative p-1 border-2 border-dashed transition-all duration-500 ease-out z-10 ${
        isDragging
          ? "border-accent bg-gradient-drag scale-[1.02] shadow-2xl shadow-accent/30 transform-gpu animate-glow"
          : "border-accent"
      }`}
      onDrop={handleDrop}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      {isDragging && (
        <div className="absolute inset-0 rounded-xl animate-pulse">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20"></div>
        </div>
      )}

      {isDragging && (
        <div className="absolute inset-0 bg-gradient-to-br from-accent/15 to-accent/5 backdrop-blur-md flex items-center justify-center z-50 rounded-xl border-2 border-accent/50 animate-slide-in">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-accent/30 to-accent/10 rounded-full flex items-center justify-center shadow-lg animate-float">
                <svg
                  className="w-10 h-10 text-white animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
              </div>
              {/* Ripple effect */}
              <div className="absolute inset-0 w-20 h-20 bg-accent/20 rounded-full animate-ripple"></div>
            </div>
            <div className="space-y-2">
              <p className="text-white font-bold text-xl mb-2">Drop your images here</p>
              <p className="text-white/80 text-base">Release to upload your files</p>
              <div className="flex items-center justify-center gap-2 mt-3">
                <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className={`w-full min-h-96 rounded-xl border-2 border-dashed relative transition-all duration-500 ${
          isDragging ? "border-accent/70 bg-accent/90" : "border-accent/50"
        }`}
      >
        {isProcessing && (
          <div className="absolute inset-0 bg-white/95 backdrop-blur-sm flex items-center justify-center z-50 rounded-xl">
            <div className="flex flex-col items-center gap-6">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-accent/20 rounded-full"></div>
                <div className="absolute top-0 left-0 w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-1">
                  <div className="w-2 h-2 bg-accent/60 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-accent/60 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-accent/60 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-accent font-bold text-xl mb-2">Converting images...</p>
              </div>
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
