```typescript
import Link from 'next/link';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface NavbarProps {
  logoUrl: string;
  links: Array<{ label: string; href: string }>;
  ctaText: string;
  ctaHref: string;
}

export const Navbar: React.FC<NavbarProps> = ({ logoUrl, links, ctaText, ctaHref }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          <img src={logoUrl} alt="Bright Smile Dental Logo" className="h-10" />
        </Link>
        <div className="hidden md:flex space-x-4">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="hover:underline">
              {link.label}
            </Link>
          ))}
        </div>
        <button
          className="md:hidden"
          aria-label="Open menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
          <button
            className="self-end p-4"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
          <div className="flex flex-col space-y-2">
            {links.map((link) => (
              <Link key={link.label} href={link.href} className="p-4 hover:bg-gray-200">
                {link.label}
              </Link>
            ))}
            <Link href={ctaHref} className="p-4 bg-primary text-white">
              {ctaText}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
```