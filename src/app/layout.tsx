import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RYT Downloader",
  description: "High - Qulity Youtuve video downloader",
  verification: {
    google: "Sw4pHjtcNQ0-kAfHuHj9tP9-5_l5ePPLUE_w-qCgxrc",
  },
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

// <meta name="google-site-verification" content="Sw4pHjtcNQ0-kAfHuHj9tP9-5_l5ePPLUE_w-qCgxrc" />
