import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RYT Downloader",
  description: "High - Qulity Youtuve video downloader",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnalytics measurementId="G-7CMM851EN0" />

      <body className={inter.className}>
        <Toaster richColors theme="dark" position="top-center" />
        {children}
      </body>
    </html>
  );
}
