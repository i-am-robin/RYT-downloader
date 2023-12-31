import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";
import Script from "next/script";

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
      <GoogleAnalytics measurementId="G-BSCMX5CPY0" />

      {process.env.NODE_ENV === "production" && (
        <Script
          id="adsbygoogle-init"
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4463310387942738"
          crossOrigin="anonymous"
        />
      )}

      <body className={inter.className}>
        <Toaster richColors theme="dark" position="top-center" />
        {children}
      </body>
    </html>
  );
}

// <meta name="google-site-verification" content="Sw4pHjtcNQ0-kAfHuHj9tP9-5_l5ePPLUE_w-qCgxrc" />
// <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4463310387942738"
// crossorigin="anonymous"></script>
