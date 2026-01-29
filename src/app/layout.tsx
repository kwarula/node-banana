import type { Metadata } from "next";
import "./globals.css";
import { Toast } from "@/components/Toast";

export const metadata: Metadata = {
  title: "Big Box Studio - AI Image Workflow",
  description: "Node-based AI image generation workflow by Big Box Creative",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Toast />
      </body>
    </html>
  );
}
