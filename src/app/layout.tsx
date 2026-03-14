import type { Metadata } from "next";
import { Manrope, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// Font Configuration
const manrope = Manrope({ 
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brightsmiledental-demo.com"),
  title: {
    default: "Bright Smile Dental | Houston, TX",
    template: "%s | Bright Smile Dental"
  },
  description: "Premium family and cosmetic dentistry in Houston, TX. Experience life-changing confidence with our patient-first approach.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brightsmiledental-demo.com",
    siteName: "Bright Smile Dental",
    title: "Bright Smile Dental | Houston, TX",
    description: "Premium family and cosmetic dentistry in Houston, TX.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Bright Smile Dental Clinic",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${manrope.variable} ${inter.variable} ${playfair.variable} font-sans antialiased bg-[#F9FAFB] text-[#4B5563]`}>
        {children}
      </body>
    </html>
  );
}