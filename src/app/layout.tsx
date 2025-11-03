import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AOSInit } from "@/components/website/aos-init";
import { LocationPopup } from "@/components/website/location-popup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Venus Blinds - Premium Window Treatments & Professional Installation",
  description: "Transform your space with Venus Blinds' premium window treatments. Professional installation, lifetime warranty, and free consultation across multiple cities.",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon/icon.webp', type: 'image/webp' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AOSInit />
        <LocationPopup />
        {children}
      </body>
    </html>
  );
}
