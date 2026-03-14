import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria L.",
    role: "Patient",
    content: "I haven't smiled in photos for years until now. Dr. Bennett changed my life with the veneers. The process was so comfortable!",
    rating: 5,
  },
  {
    name: "James T.",
    role: "Patient",
    content: "Best dental experience in Houston. The staff is incredibly friendly and the facility is cleaner than a hospital. Highly recommend.",
    rating: 5,
  },
  {
    name: "Sarah J.",
    role: "Patient",
    content: "I was terrified of the dentist, but their sedation options and gentle approach made my implant surgery completely painless.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-section-gap bg-[#0F3460] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
           <Quote className="w-12 h-12 text-[#008080] mx-auto mb-6" />
          <h2 className="font-heading font-bold text-4xl mb-4">Patient Stories</h2>
          <p className="text-lg text-gray-300">
            Don't just take our word for it. Hear from the neighbors we've helped smile brighter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-200 mb-6 leading-relaxed italic">"{item.content}"</p>
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 bg-[#008080] rounded-full flex items-center justify-center font-bold text-white">
                   {item.name.charAt(0)}
                 </div>
                 <div>
                   <p className="font-bold text-white">{item.name}</p>
                   <p className="text-xs text-[#008080] uppercase tracking-wider">{item.role}</p>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}