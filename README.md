# Bright Smile Dental Website

## Project Description
This project is a responsive website for Bright Smile Dental, a modern family dentistry practice. The site is designed to provide a clean, professional, and user-friendly experience for potential patients, showcasing services, team members, and testimonials.

## Tech Stack
- Next.js 14+ (React Framework)
- TypeScript
- Tailwind CSS (Utility-first CSS framework)
- Framer Motion (Animation library)
- next/image (Optimized image handling)
- next/font (Web font optimization)

## Getting Started

### Install
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/bright-smile-dental.git
   cd bright-smile-dental
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development
To start the development server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000`.

### Build
To create an optimized production build:
```bash
npm run build
```

### Deploy
To deploy the application, follow the instructions in the Deployment Guide.

## Project Structure Overview
```
/src
  /app
    /api
    /components
    /config
    /pages
    /styles
  /public
  /utils
```

## Image Customization
To change any image on the site, edit the `src/config/images.ts` file. Each image slot is defined with a comment indicating where it appears on the site.

### Image Slots
- **hero**: Homepage hero banner
- **hero-alt**: Alternative hero image for inner pages
- **about**: About page image
- **service-1**: First service card image
- **service-2**: Second service card image
- **service-3**: Third service card image
- **gallery-1**: Gallery image 1
- **gallery-2**: Gallery image 2
- **team-1**: Team member photo
- **gallery-3**: Gallery image 3
- **cta**: Call-to-action section background
- **testimonial-bg**: Testimonials section background

## Brand Customization
To change the brand colors, modify the `tailwind.config.js` file. For font changes, update the `layout.tsx` file. To change the logo, edit the `src/config/images.ts` file.

## Environment Variables Needed
- `NEXT_PUBLIC_API_URL`: The base URL for the API (if applicable).

## Deployment Instructions
For deploying the application, follow the detailed steps in the DEPLOYMENT_GUIDE.md file.