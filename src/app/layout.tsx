```typescript
import './globals.css';
import { metadata } from './metadata';
import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'Bright Smile Dental',
  description: 'Your trusted family dental practice in Houston, TX, providing comprehensive dental care with a gentle touch.',
  metadataBase: new URL('https://example.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'bg-bg-body text-text-body')}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```