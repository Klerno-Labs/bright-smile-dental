import type { Metadata } from "next";
import { Manrope, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL("https://brightsmiledental.com"),
  title: {
    default: "Bright Smile Dental | Houston's Premier Dentist",
    template: "%s | Bright Smile Dental"
  },
  description: "Experience world-class dentistry in Houston. From cosmetic makeovers to implants, we provide gentle, patient-first care in a spa-like environment.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brightsmiledental.com",
    siteName: "Bright Smile Dental",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bright Smile Dental Office",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} ${playfair.variable}`}>
      <body>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}