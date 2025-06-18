"use client";
import Image from "next/image";
import { Suspense, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type SelectedImagesListProps = {
  file: File[];
  selectedFormat: string;
  onFormatChange: (format: string) => void;
  handleImageRemove: (index: number) => void;
};

export const SelectedImagesList = ({
  file,
  selectedFormat,
  onFormatChange,
  handleImageRemove,
}: SelectedImagesListProps) => {
  const [isOpenRemove, setIsOpenRemove] = useState<number | null>(null);

  return (
    <>
      <div className="space-y-3">
        {file.map((image, index) => (
          <div
            key={index}
            className="bg-white/50 backdrop-blur-sm rounded-lg p-1 lg:p-3 flex items-center gap-4 group hover:bg-white/60 transition-all duration-200 overflow-hidden"
          >
            <AnimatePresence>
              {isOpenRemove === index && (
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => handleImageRemove(index)}
                  className="absolute top-0 right-0 w-1/2 h-full bg-accent z-10 lg:hidden flex items-center justify-center rounded-lg cursor-pointer"
                >
                  <p className="text-white text-center text-lg font-bold">Remove</p>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="relative w-16 h-16 rounded-md overflow-hidden cursor-pointer">
              <Suspense fallback={<div className="w-full h-full bg-gray-200 animate-pulse" />}>
                <Image
                  src={URL.createObjectURL(image)}
                  alt={image.name}
                  fill
                  className="object-cover"
                  loading="lazy"
                  onClick={() => setIsOpenRemove(index === isOpenRemove ? null : index)}
                />
              </Suspense>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-700 truncate">{image.name}</p>
              <p className="text-xs text-gray-500 truncate">{(image.size / 1024 / 1024).toFixed(3)} KB</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="sub-heading text-sm text-gray-500 hidden lg:block">Convert to:</span>
                <select
                  className="bg-transparent border border-gray-200 rounded-md px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 cursor-pointer"
                  value={selectedFormat}
                  onChange={(e) => onFormatChange(e.target.value)}
                >
                  <option value="webp">WEBP</option>
                  <option value="png">PNG</option>
                  <option value="jpg">JPG</option>
                  <option value="jpeg">JPEG</option>
                </select>
              </div>
              <button
                className="p-1.5 rounded-full hidden lg:block hover:bg-red-50 text-gray-400 hover:text-red-400 transition-all duration-200"
                aria-label="Remove"
                onClick={() => handleImageRemove(index)}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        ))}
        <p className="text-sm text-gray-500 text-center">
          {file.length} images selected, {(file.reduce((acc, image) => acc + image.size, 0) / 1024 / 1024).toFixed(2)}{" "}
          MB total size
        </p>
      </div>
    </>
  );
};
