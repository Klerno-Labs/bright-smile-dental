import { Container } from "@/components/ui/Container";

const logos = [
  { name: "Delta Dental", path: "M10 20L20 10L10 0L0 10L10 20Z" }, // Diamond
  { name: "Cigna", path: "M12 2L2 22H22L12 2Z" }, // Triangle
  { name: "Aetna", path: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" }, // Circle
  { name: "Humana", path: "M12 2L2 12L12 22L22 12L12 2Z" }, // Square-ish
];

export function TrustBar() {
  return (
    <section className="py-8 border-y border-gray-100 bg-white">
      <Container>
        <p className="text-center text-sm font-semibold text-gray-400 mb-6 uppercase tracking-wider">
          Accepted Insurances & Partners
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center gap-2 hover:opacity-100 hover:text-[#4CA1A3] transition-all cursor-default">
               <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                 <path d={logo.path} />
               </svg>
               <span className="font-bold text-lg">{logo.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}