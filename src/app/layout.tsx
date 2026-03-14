import type { Metadata } from "next";
import { Manrope, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL("https://brightsmiledental.com"),
  title: {
    default: "Bright Smile Dental | Houston, TX",
    template: "%s | Bright Smile Dental"
  },
  description: "Premium family and cosmetic dentistry in Houston, TX. Experience life-changing confidence with our patient-first approach.",
  openGraph: {
    title: "Bright Smile Dental | Houston, TX",
    description: "Premium family and cosmetic dentistry in Houston, TX.",
    url: "https://brightsmiledental.com",
    siteName: "Bright Smile Dental",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Bright Smile Dental" }],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${manrope.variable} ${inter.variable} ${playfair.variable} font-sans bg-background text-textMain`}>
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              name: "Bright Smile Dental",
              image: "https://brightsmiledental.com/og-image.jpg",
              "@id": "https://brightsmiledental.com",
              url: "https://brightsmiledental.com",
              telephone: "+17135550123",
              address: {
                "@type": "PostalAddress",
                streetAddress: "4521 Westheimer Rd, Suite 200",
                addressLocality: "Houston",
                addressRegion: "TX",
                postalCode: "77027",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 29.7379,
                longitude: -95.4342,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "14:00",
                },
              ],
              priceRange: "$$",
            }),
          }}
        />
      </body>
    </html>
  );
}