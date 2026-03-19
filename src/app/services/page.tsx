import { Metadata } from "next";
import { ServicesContent } from "./services-client";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore our comprehensive dental treatments including Cosmetic Dentistry, Implants, Whitening, and more at Bright Smile Dental.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
