import { CardUploadImageWrapper } from "@/components/uploads/CardUploadImageWrapper";
import { PiCheck } from "react-icons/pi";

export default function Home() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with Gaussian blur effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 size-96 -z-10 bg-purple-700/20 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-0 size-96 -z-10 bg-pink-300/20 blur-[100px] rounded-full" />
      </div>

      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-background/30 backdrop-blur-sm z-10 px-3 pt-20 lg:pt-0">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="heading">Convert Image</h1>
          <p className="sub-heading max-w-2xl text-center">
            Convert your images to any format for free. Just upload your image below to get started – No registration
            required!
          </p>
        </div>
        <div className="mx-auto w-full py-5">
          <CardUploadImageWrapper />
        </div>
        <div className="w-full flex justify-center py-5">
          <div className="flex gap-4 text-sm text-gray-600 flex-col md:flex-row">
            <div className="flex items-center gap-2  border border-accent/20 backdrop-blur-sm rounded-lg p-3">
              <PiCheck className="text-green-500" />
              <span className="sub-heading">Maximum 10 images per upload</span>
            </div>
            <div className="flex items-center gap-2 border border-accent/20 backdrop-blur-sm rounded-lg p-3">
              <PiCheck className="text-green-500" />
              <span className="sub-heading">Supported formats: JPG, PNG, WEBP</span>
            </div>
            <div className="flex items-center gap-2 border border-accent/20 backdrop-blur-sm rounded-lg p-3">
              <PiCheck className="text-green-500" />
              <span className="sub-heading">Maximum file size: 10MB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
