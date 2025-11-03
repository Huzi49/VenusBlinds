import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../globals.css";
import { AOSInit } from "@/components/website/aos-init";
import { LandingHeader } from "@/components/landing/landing-header";
import { LandingFooter } from "@/components/landing/landing-footer";

// Use Geist font
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Free Consultation - Venus Blinds",
  description: "Book your free consultation with Venus Blinds. Expert advice on premium window treatments, blinds, shades, and more.",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon/icon.webp', type: 'image/webp' },
    ],
  },
};

export default function FreeConsultationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} font-sans antialiased`}>
        <AOSInit />
        <div className="min-h-screen flex flex-col">
          <LandingHeader />
          <main className="flex-1">
            {children}
          </main>
          <LandingFooter />
        </div>
      </body>
    </html>
  );
}
