import type { Metadata } from "next";
import { Inter, Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brightsmiledental.com"),
  title: {
    default: "Bright Smile Dental | Modern Family Dentistry in Houston",
    template: "%s | Bright Smile Dental"
  },
  description: "Experience world-class dental care at Bright Smile Dental in Houston. Cosmetic, Implant, and Family dentistry in a calm, spa-like environment.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brightsmiledental.com",
    siteName: "Bright Smile Dental",
    title: "Bright Smile Dental | Crafting World-Class Smiles",
    description: "Tier 1 dental care in a calm, luxurious environment. Book your consultation today.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2071&auto=format&fit=crop",
        width: 1200,
        height: 630,
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
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${montserrat.variable}`}>
      <body className="bg-white text-gray-900 antialiased">
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
              "image": "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2071&auto=format&fit=crop",
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
                "longitude": -95.4563
              },
              "url": "https://brightsmiledental.com",
              "telephone": "+17135550198",
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
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}