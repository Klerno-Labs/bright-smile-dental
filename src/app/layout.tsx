import type { Metadata } from "next";
import { Inter, Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { images } from "@/config/images";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://brightsmiledental.com"),
  title: {
    default: "Bright Smile Dental | Premium Family & Cosmetic Dentistry",
    template: "%s | Bright Smile Dental"
  },
  description: "Experience world-class dental care in Houston. From cosmetic makeovers to family checkups, we accept new patients. Book your appointment today.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brightsmiledental.com",
    siteName: "Bright Smile Dental",
    title: "Bright Smile Dental | Premium Family & Cosmetic Dentistry",
    description: "Experience world-class dental care in Houston. Accepting new patients.",
    images: [
      {
        url: images.hero.src,
        width: images.hero.width,
        height: images.hero.height,
        alt: images.hero.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bright Smile Dental | Premium Family & Cosmetic Dentistry",
    description: "Experience world-class dental care in Houston.",
    images: [images.hero.src],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification-token",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${montserrat.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
      
      {/* Structured Data for LocalBusiness */}
      <Script id="structured-data" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          "name": "Bright Smile Dental",
          "image": images.hero.src,
          "telephone": "(713) 555-0123",
          "email": "info@brightsmiledental.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "4521 Westheimer Rd, Suite 200",
            "addressLocality": "Houston",
            "addressRegion": "TX",
            "postalCode": "77027",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 29.7373,
            "longitude": -95.4619
          },
          "url": "https://brightsmiledental.com",
          "priceRange": "$$",
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "08:00",
              "closes": "18:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Saturday",
              "opens": "09:00",
              "closes": "14:00"
            }
          ],
          "sameAs": [
            "https://www.facebook.com/brightsmiledental",
            "https://www.instagram.com/brightsmiledental"
          ]
        })}
      </Script>
    </html>
  );
}