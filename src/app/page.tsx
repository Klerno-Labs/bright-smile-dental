import { HeroHome } from "@/components/sections/HeroHome";
import { TrustBar } from "@/components/sections/TrustBar";
import { PainMap } from "@/components/sections/PainMap";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { TeamSection } from "@/components/sections/TeamSection";
import { CallToAction } from "@/components/sections/CallToAction";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Modern dental practice providing comprehensive family dentistry in Austin, TX.",
};

export default function Home() {
  return (
    <>
      <HeroHome />
      <TrustBar />
      <PainMap />
      <ServicesGrid />
      <Testimonials />
      <TeamSection />
      <CallToAction />
    </>
  );
}