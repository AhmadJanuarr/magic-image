import { LottieAnimation } from "../LottieAnimation";
import loadingAnimation from "@/lotties/loading.json";
import uploadAnimation from "@/lotties/upload.json";

type UploadPlaceholderProps = {
  isUploading: boolean;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const UploadPlaceholder = ({ handleImageChange, isUploading }: UploadPlaceholderProps) => {
  return isUploading ? (
    <div className="w-full min-h-96 flex items-center justify-center">
      <div className="w-36 text-center">
        <LottieAnimation srcUrl={loadingAnimation} width={200} height={200} loop={true} autoplay={true} />
        <p className="text-lg text-gray-500 animate-pulse sub-heading">Processing...</p>
      </div>
    </div>
  ) : (
    <label htmlFor="file-upload" className="z-0 justify-center items-center flex cursor-pointer w-full min-h-96 ">
      <div className="text-center items-center justify-center flex flex-col gap-4">
        <div className="w-36">
          <LottieAnimation srcUrl={uploadAnimation} width={50} height={500} loop={true} autoplay={true} />
        </div>
        <div className="flex flex-col z-10 ">
          <h2 className="text-2xl font-semibold mb-2 sub-heading">Upload your images</h2>
          <p>
            <span className="text-accent hover:font-bold transition-all duration-300 sub-heading">Select images</span>{" "}
            or <span className="text-primary sub-heading">Drag & Drop</span>
          </p>
        </div>
      </div>
      <input type="file" multiple accept="image/*" className="hidden" id="file-upload" onChange={handleImageChange} />
    </label>
  );
};
