```typescript
import { images } from '@/config/images';
import { cn } from '@/lib/utils';

export const metadata = {
  title: 'Bright Smile Dental - Home',
  description: 'Welcome to Bright Smile Dental, your trusted family dental practice in Houston, TX.',
  openGraph: {
    title: 'Bright Smile Dental - Home',
    description: 'Welcome to Bright Smile Dental, your trusted family dental practice in Houston, TX.',
    image: images.hero.src,
  },
};

export default function Home() {
  return (
    <div className={cn('py-16 md:py-24 lg:py-32')}>
      <section className="min-h-[80vh] flex items-center">
        <div className="w-full lg:w-3/5 pr-0 lg:pr-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">Modern Dentistry with a Gentle Touch</h1>
          <p className="text-lg leading-relaxed">We provide comprehensive dental care for the whole family in a warm and welcoming environment.</p>
          <div className="mt-6">
            <Link href="/book" className="bg-primary text-white px-6 py-3 rounded-lg">Book Now</Link>
            <Link href="/virtual-consult" className="border border-primary text-primary px-6 py-3 rounded-lg ml-4">Virtual Consult</Link>
          </div>
        </div>
        <div className="hidden lg:block lg:w-2/5 relative">
          <img src={images.hero.src} alt={images.hero.alt} className="rounded-lg" priority />
        </div>
      </section>
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service cards will be rendered here */}
        </div>
      </section>
    </div>
  );
}
```