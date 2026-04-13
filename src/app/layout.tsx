import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Golden Memory Studio | Cinematic Photography & Storytelling",
  description: "High-end, Apple-level cinematic photography and scrollytelling experiences. Capture your story with precision and soul.",
  keywords: ["photography", "cinematic", "storytelling", "wedding photography", "portrait studio", "premium design"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} bg-[#050505]`}>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
