import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Cleaning | Residential & Commercial Cleaning",
    template: "%s | Cleaning",
  },
  description:
    "Professional cleaning for homes, offices and commercial spaces. Request a quote for residential, deep, carpet, upholstery, window or commercial cleaning.",
  keywords: [
    "cleaning services",
    "home cleaning",
    "office cleaning",
    "commercial cleaning",
    "deep cleaning",
    "carpet cleaning",
    "window cleaning",
  ],
  openGraph: {
    title: "Cleaning | A cleaner space. A better day.",
    description:
      "Professional residential and commercial cleaning with a simple, modern service experience.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
