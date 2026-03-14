import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { BeforeAfterSlider } from "@/components/features/BeforeAfterSlider";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { SmileAssessment } from "@/components/features/SmileAssessment";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABanner } from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <BeforeAfterSlider />
      <ServiceGrid />
      <SmileAssessment />
      <TeamGrid />
      <Testimonials />
      <CTABanner />
    </>
  );
}