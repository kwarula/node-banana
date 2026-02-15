import type { Metadata } from "next";
import "./globals.css";
import { Toast } from "@/components/Toast";

export const metadata: Metadata = {
  title: "Big Box Creative - AI Workflow Engine",
  description: "Professional AI image generation and creative communication workflow platform for Big Box Creative.",
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
