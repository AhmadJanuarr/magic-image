import { FooterWrapper } from "@/components/layout/footer/footerWrapper";
import { HeaderWrapper } from "@/components/layout/header/headerWrapper";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/context/themes/theme-provider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
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
    <ThemeProvider>
      <html lang="en">
        <body
          className="antialiased bg-background dark:bg-background-dark text-primary dark:text-dark-primary transition-all duration-500"
          suppressHydrationWarning
        >
          <HeaderWrapper />
          {children}
          <Toaster richColors />
          <FooterWrapper />
        </body>
      </html>
    </ThemeProvider>
  );
}
