import { Metadata } from "next";
import { AboutContent } from "./about-client";

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet the team of world-class dentists at Bright Smile Dental in Houston.",
};

export default function AboutPage() {
  return <AboutContent />;
}
