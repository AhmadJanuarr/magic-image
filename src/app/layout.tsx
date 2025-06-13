import { HeaderWrapper } from "@/components/layout/header/headerWrapper";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import "./globals.css";
import { FooterWrapper } from "@/components/layout/footer/footerWrapper";

export const metadata: Metadata = {
  title: "Magic Image",
  description:
    "Convert your images to any format for free. Just upload your image below to get started – No registration required!",
  icons: {
    icon: "/logo/new-logo-transparant.png",
  },
  openGraph: {
    images: "/example/example.png",
    type: "website",
    title: "Magic Image",
    description:
      "Convert your images to any format for free. Just upload your image below to get started – No registration required!",
  },
  twitter: {
    card: "summary_large_image",
    title: "Magic Image",
    description:
      "Convert your images to any format for free. Just upload your image below to get started – No registration required!",
    images: "/example/example.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning>
        <HeaderWrapper />
        {children}
        <Toaster richColors />
        <FooterWrapper />
      </body>
    </html>
  );
}
