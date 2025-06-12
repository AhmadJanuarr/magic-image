import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <Image src="/404.gif" alt="404 Not Found Animation" width={400} height={400} priority />
      <h1 className="mt-8 text-2xl font-bold text-foreground">Page Not Found</h1>
      <p className="mt-4 text-lg text-foreground/80">The page you are looking for doesn't exist or has been moved.</p>
      <Link
        href="/"
        className="mt-8 px-6 py-3 rounded-full bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors font-medium"
      >
        Return Home
      </Link>
    </div>
  );
}
