import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import LoadingScreen from "@/components/LoadingScreen";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FixedGap — Post-Stroke Rehabilitation Platform",
  description: "AI-powered rehabilitation platform for stroke recovery. Computer vision biomechanics analysis for neurological rehabilitation.",
  openGraph: {
    title: "FixedGap — Post-Stroke Rehabilitation Platform",
    description: "AI-powered rehabilitation platform for stroke recovery. Computer vision biomechanics analysis for neurological rehabilitation.",
    url: 'https://fixedgap.com', // Cambia esto por tu dominio real cuando lo tengas
    siteName: 'FixedGap',
    images: [
      {
        url: '/og-image.jpg', // Ruta a tu imagen Open Graph
        width: 1200,
        height: 630,
        alt: 'FixedGap - Post-Stroke Rehabilitation Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "FixedGap — Post-Stroke Rehabilitation Platform",
    description: "AI-powered rehabilitation platform for stroke recovery. Computer vision biomechanics analysis for neurological rehabilitation.",
    images: ['/og-image.jpg'], // Misma imagen para Twitter
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <LoadingScreen />
        <Navbar />
        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}
