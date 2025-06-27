import { LottieAnimation } from "../LottieAnimation";
import loadingAnimation from "@/lotties/loading.json";

export const UploadProcessing = () => {
  return (
    <div className="w-full min-h-96 flex items-center justify-center">
      <div className="w-36 text-center">
        <LottieAnimation srcUrl={loadingAnimation} width={200} height={200} loop={true} autoplay={true} />
        <p className="text-lg text-gray-500 animate-pulse sub-heading dark:text-dark-primary">Processing...</p>
      </div>
    </div>
  );
};
