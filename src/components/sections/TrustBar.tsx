import Image from "next/image";

// Simulating logos using text/images
const partners = [
  { name: "Delta Dental", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Delta_Dental_logo.svg/2560px-Delta_Dental_logo.svg.png" }, // Placeholder logic, using Unsplash generic for safety in this demo
  { name: "Cigna", src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=100&h=50&fit=crop" }, // Using generic abstract logos to prevent broken links
  { name: "Aetna", src: "https://images.unsplash.com/photo-1614064641938-3bcee529cfc4?w=100&h=50&fit=crop" },
  { name: "Humana", src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=100&h=50&fit=crop" },
  { name: "MetLife", src: "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=100&h=50&fit=crop" },
];

export function TrustBar() {
  return (
    <section className="py-12 border-b border-gray-100 bg-white">
      <div className="max-w-[1240px] mx-auto px-6">
        <p className="text-center text-sm font-semibold text-muted uppercase tracking-widest mb-8">
          We Work With Most Major Insurance Plans
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, idx) => (
            <div key={idx} className="flex items-center gap-2">
               {/* In a real build, use SVGs. Here using generic placeholders for reliability */}
               <div className="text-xl font-heading font-bold text-gray-400">{partner.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}