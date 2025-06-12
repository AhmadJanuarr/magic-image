import { CardUploadImageWrapper } from "@/components/uploads/CardUploadImageWrapper";

export default function Home() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with Gaussian blur effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 size-96 -z-10 bg-purple-700/20 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-0 size-96 -z-10 bg-pink-300/20 blur-[100px] rounded-full" />
      </div>

      <div className="w-full min-h-screen flex flex-col items-center justify-center gap-10 bg-background/30 backdrop-blur-sm z-10 px-3">
        <h1 className="heading ">Convert Image</h1>
        <p className="sub-heading max-w-2xl text-center">
          Convert your images to any format for free. Just upload your image below to get started – No registration
          required!
        </p>
        <div className="mx-auto w-full">
          <CardUploadImageWrapper />
        </div>
      </div>
    </section>
  );
}
