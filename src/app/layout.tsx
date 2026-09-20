import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://periodt.in"),
  title: {
    default: "Periodt. | Thoughtfully Designed Period Care",
    template: "%s | Periodt.",
  },
  description:
    "Comfortable, conscious period care designed for real life. Eco-friendly pads, menstrual cups, reusable period underwear and comfort kits. It's Natural, Period.",
  keywords: [
    "period care",
    "menstrual care",
    "eco-friendly pads",
    "menstrual cup",
    "period underwear",
    "menstrual health",
    "sustainable period care",
    "Periodt",
  ],
  authors: [{ name: "Periodt" }],
  creator: "Periodt",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://periodt.in",
    siteName: "Periodt.",
    title: "Periodt. | Thoughtfully Designed Period Care",
    description:
      "Comfortable, conscious period care designed for real life. It's Natural, Period.",
    images: [
      {
        url: "/images/hero-product.jpg",
        width: 1200,
        height: 630,
        alt: "Periodt period care products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Periodt. | Thoughtfully Designed Period Care",
    description:
      "Comfortable, conscious period care designed for real life. It's Natural, Period.",
    images: ["/images/hero-product.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-cream text-burgundy-dark">
        {children}
      </body>
    </html>
  );
}
