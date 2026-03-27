# Bright Smile Dental Website

A bespoke, high-performance Next.js 14 website built for Bright Smile Dental. This project represents a Tier 2 Growth deliverable, featuring custom animations, interactive elements, and a modern design system tailored for the dental industry.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Icons:** Lucide React
- **Fonts:** Montserrat (Headings), Open Sans (Body)

## Getting Started

### Prerequisites
- Node.js 18+ installed
- Git installed

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd bright-smile-dental
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── api/             # API routes (e.g., contact form handler)
│   ├── layout.tsx       # Root layout (fonts, SEO)
│   └── page.tsx         # Homepage
├── components/
│   ├── layout/          # Navbar, Footer
│   └── sections/        # Feature sections (Hero, SymptomChecker)
├── config/
│   └── images.ts        # Centralized image configuration
└── lib/
    └── utils.ts         # Utility functions (cn helper)
```

## Customization Guide

### 🖼️ Changing Images
All images are managed in a single file for easy updates.

1. Open `src/config/images.ts`.
2. Find the slot you want to change (e.g., `hero`, `about-hero`).
3. Update the `src` URL with your new image link (Unsplash, AWS S3, Cloudinary, etc.).
4. Update the `alt` text for accessibility.
5. Save the file. The changes will reflect immediately on the site.

### 🎨 Changing Colors
The color palette is defined in `tailwind.config.ts`.

To change the primary brand color:
1. Open `tailwind.config.ts`.
2. Under `theme.extend.colors.primary`, update the `DEFAULT` and `dark` values to your desired hex codes.

### ✏️ Changing Fonts
1. Open `src/app/layout.tsx`.
2. Modify the import from `next/font/google`.
3. Update the CSS variables in the `body` tag if necessary.

### 📝 Editing Content
Text content is located directly inside the page components (e.g., `src/app/page.tsx`).
- Search for the text you want to change and edit it directly in the JSX.
- The contact form logic is in `src/components/sections/ContactForm.tsx`.

## Deployment

This project is optimized for deployment on **Vercel**.

1. Push your code to GitHub/GitLab/Bitbucket.
2. Import the project in the [Vercel Dashboard](https://vercel.com/new).
3. Vercel will automatically detect Next.js and configure the build settings.
4. Click **Deploy**.

For detailed deployment instructions, see `DEPLOYMENT_GUIDE.md`.

## Environment Variables

No external API keys are required to run the site in development mode. However, you may need to add a `.env.local` file for production.

Example (see `.env.example`):
```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Support

For support requests or questions about this build, please contact Pegrio at showcase@pegrio.com.

<!-- rebuilt 2026-03-27T13:04:11Z -->
