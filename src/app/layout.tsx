import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "ESDORR — Science-Backed Skincare for Indian Skin",
    template: "%s | ESDORR Skincare",
  },
  description:
    "Target dark spots, even skin tone and protect your glow with ESDORR's clinically backed Melano Glo TX Serum and Bright GLO Sunscreen SPF 50 PA++++.",
  keywords: [
    "ESDORR",
    "Indian skincare",
    "Melano Glo TX Serum",
    "Bright GLO Sunscreen SPF 50",
    "Tranexamic Acid serum",
    "Niacinamide serum",
    "Zero white cast sunscreen",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400..700;1,9..40,400..700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-cream text-espresso antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
