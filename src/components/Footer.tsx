```typescript
import Link from 'next/link';
import { cn } from '@/lib/utils';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-lg font-bold">Bright Smile Dental</h2>
          <p className="text-sm">Your trusted family dental practice.</p>
        </div>
        <div>
          <h3 className="text-md font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/services" className="hover:underline">Services</Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">About Us</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold">Contact Info</h3>
          <p>(713) 555-1234</p>
          <p>4521 Westheimer Rd, Suite 200, Houston, TX 77027</p>
          <p>Mon-Fri: 8am-6pm, Sat: 9am-2pm, Sun: Closed</p>
        </div>
        <div>
          <h3 className="text-md font-semibold">Follow Us</h3>
          <ul className="flex space-x-4">
            <li>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page">Facebook</Link>
            </li>
            <li>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page">Instagram</Link>
            </li>
            <li>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter page">Twitter</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center py-4">
        <p>© {new Date().getFullYear()} Bright Smile Dental. All rights reserved.</p>
        <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link> | <Link href="/terms-of-service" className="hover:underline">Terms of Service</Link>
      </div>
    </footer>
  );
};
```