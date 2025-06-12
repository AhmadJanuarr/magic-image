import setupAnimation from "@/lotties/setup.json";
import { LottieAnimation } from "../LottieAnimation";
import { ChangeEvent, useState, useEffect, useRef } from "react";
import { useImageUpload } from "@/hooks/useImageUpload";

type ActionsBarProps = {
  handleAddImage: (e: ChangeEvent<HTMLInputElement>) => void;
  handleConvertImage: () => void;
};

export const ActionsBar = ({ handleAddImage, handleConvertImage }: ActionsBarProps) => {
  const [showQualityOptions, setShowQualityOptions] = useState(false);
  const [quality, setQuality] = useState(80);
  const popupRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setShowQualityOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-between items-center mt-6 bg-white/50 backdrop-blur-sm rounded-lg p-2">
      <div className="flex items-center gap-2 cursor-pointer hover:text-accent transition-all duration-200 group">
        <svg
          className="w-5 h-5 text-gray-500 group-hover:text-accent transition-all duration-200"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path d="M12 5v14M5 12h14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        <label
          htmlFor="file-upload"
          className="text-sm font-medium text-gray-600 group-hover:text-accent transition-all duration-200 cursor-pointer"
        >
          Add more images
        </label>
        <input className="hidden" type="file" multiple accept="image/*" id="file-upload" onChange={handleAddImage} />
      </div>
      <div className="flex items-center gap-5 relative">
        <button
          ref={buttonRef}
          className="rounded-lg hover:bg-gray-100 text-gray-500 transition-all duration-200 cursor-pointer"
          aria-label="Settings"
          onClick={() => setShowQualityOptions(!showQualityOptions)}
        >
          <LottieAnimation srcUrl={setupAnimation} width={50} height={50} loop={true} autoplay={false} />
        </button>
        <button
          className="px-4 py-2 bg-accent/90 hover:bg-accent text-white rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer"
          onClick={handleConvertImage}
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path
              d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Convert
        </button>

        {showQualityOptions && (
          <div
            ref={popupRef}
            className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg p-4 w-64 z-50 border border-gray-100"
          >
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600">Quality</span>
                <span className="text-sm font-medium text-accent">{quality}%</span>
              </div>
              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={quality}
                  onChange={(e) => setQuality(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-accent"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>Low</span>
                  <span>High</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
