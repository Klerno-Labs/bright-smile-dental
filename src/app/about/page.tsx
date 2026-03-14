import Image from 'next/image';
import { Award, Users, Zap, HeartHandshake } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { images } from '@/config/images';

export const metadata = {
  title: "About Us - Our Philosophy",
  description: "Learn about Bright Smile Dental's history, our patient-first philosophy, and our commitment to modern dental care in Houston.",
  openGraph: {
    title: "About Us - Bright Smile Dental",
    description: "Meet our team of experienced professionals dedicated to your smile.",
    images: [{ url: images['about'].src }],
  }
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src={images['about']} 
            alt="Bright Smile Dental Reception" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">About Bright Smile</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">Compassionate care, advanced technology, and a genuine passion for changing lives.</p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading font-bold text-primary mb-8">Our Philosophy</h2>
          <p className="text-xl text-text-main leading-relaxed mb-8">
            We believe a visit to the dentist should be something you look forward to, not dread. 
            Since opening our doors in 2010, we have combined state-of-the-art dental technology with 
            a warm, spa-like atmosphere to change the way Houston views dental care.
          </p>
          <blockquote className="font-serif text-2xl text-secondary italic border-l-4 border-accent pl-6 text-left my-12">
            "We treat every patient like a member of our own family, ensuring they leave our office not just with a healthier smile, but with a sense of well-being."
          </blockquote>
          <p className="text-lg text-text-main">
            From the moment you walk in, you will notice the difference. We offer complimentary beverages, 
            noise-canceling headphones, and blankets to ensure your comfort.
          </p>
        </div>
      </section>

      {/* Technology Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold text-center text-primary mb-16">Modern Technology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Digital X-Rays", desc: "90% less radiation than traditional film." },
              { icon: Award, title: "3D Imaging", desc: "Precision planning for implants." },
              { icon: Users, title: "Intraoral Cameras", desc: "See what we see in real-time." },
              { icon: HeartHandshake, title: "Laser Dentistry", desc: "Minimally invasive gum treatments." }
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-primary text-lg mb-3">{item.title}</h3>
                <p className="text-text-main text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-background">
        <div className="max-w-[1240px] mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold text-center text-primary mb-16">Meet The Experts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Sarah Bennett", role: "Lead Dentist", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&h=600&fit=crop" },
              { name: "Dr. Michael Chen", role: "Orthodontist", img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=600&h=600&fit=crop" },
              { name: "Emily Rodriguez", role: "Hygienist", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&h=600&fit=crop" }
            ].map((member, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-card group">
                <div className="relative h-80 overflow-hidden">
                  <Image src={member.img} alt={member.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-primary text-xl">{member.name}</h3>
                  <p className="text-secondary font-medium mb-4">{member.role}</p>
                  <p className="text-text-main text-sm mb-4">Passionate about providing gentle, effective care for all ages.</p>
                  <Button variant="outline" size="sm" className="w-full">View Profile</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}