import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "600", "700", "800"]
});

const openSans = Open_Sans({ 
  subsets: ["latin"],
  variable: "--font-opensans",
  display: "swap",
  weight: ["400", "600"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brightsmiledental-demo.com"),
  title: {
    default: "Bright Smile Dental | Modern Dentistry in Houston",
    template: "%s | Bright Smile Dental"
  },
  description: "Experience gentle, modern dental care in Houston. We specialize in cosmetic, family, and emergency dentistry. Book your appointment today.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brightsmiledental-demo.com",
    siteName: "Bright Smile Dental",
    title: "Bright Smile Dental | Modern Dentistry in Houston",
    description: "Experience gentle, modern dental care in Houston. We specialize in cosmetic, family, and emergency dentistry.",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${openSans.variable} font-body text-neutral-text-body bg-neutral-bg antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              "name": "Bright Smile Dental",
              "image": "https://brightsmiledental-demo.com/logo.png",
              "@id": "https://brightsmiledental-demo.com",
              "url": "https://brightsmiledental-demo.com",
              "telephone": "+17135550199",
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
                "latitude": 29.7379,
                "longitude": -95.4635
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "08:00",
                "closes": "18:00"
              },
              "priceRange": "$$"
            }),
          }}
        />
      </body>
    </html>
  );
}