# Deployment Guide: Bright Smile Dental

This guide will walk you through deploying the Bright Smile Dental website to Vercel, the recommended platform for Next.js applications.

## Prerequisites

- A Vercel account ([sign up for free](https://vercel.com/signup)).
- Your project code pushed to a Git provider (GitHub, GitLab, or Bitbucket).
- A custom domain name (optional but recommended for production).

---

## Step 1: Prepare Your Repository

1. Ensure all your changes are committed to your local git repository.
   ```bash
   git add .
   git commit -m "Ready for deployment"
   ```
2. Push your code to your remote repository (GitHub/GitLab/Bitbucket).

## Step 2: Import Project to Vercel

1. Log in to your [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **"Add New..."** -> **"Project"**.
3. You will see a list of your Git repositories. Find `bright-smile-dental` and click **Import**.

## Step 3: Configure Project Settings

Vercel will automatically detect Next.js settings. Review the following:

### Environment Variables
In the "Environment Variables" section, add any keys found in `.env.example`.
- `NEXT_PUBLIC_SITE_URL`: Set this to your intended domain (e.g., `https://brightsmiledental.com`). If you don't have one yet, use the Vercel preview URL provided.

### Build & Output Settings
- **Framework Preset:** Next.js
- **Root Directory:** `./` (default)
- **Build Command:** `npm run build` (default)
- **Output Directory:** `.next` (default)

*No changes are typically needed here.*

## Step 4: Deploy

1. Click the **Deploy** button.
2. Vercel will take a few minutes to build your site. You will see a live log of the progress.
3. Once finished, you will see a "Congratulations!" message and a live URL (e.g., `https://bright-smile-dental-xyz.vercel.app`).

## Step 5: Domain Configuration

### Assigning a Custom Domain
1. In your project dashboard in Vercel, go to the **Settings** tab.
2. Click on **Domains**.
3. Enter your domain name (e.g., `www.brightsmiledental.com`) and click **Add**.
4. Vercel will provide DNS records (A Record or CNAME) that you need to add to your domain registrar (GoDaddy, Namecheap, etc.).

### SSL Certificates
- Vercel automatically provisions SSL certificates for all domains. No manual action is required.

## Step 6: Post-Deployment Checklist

After your site is live on the custom domain, verify the following:

- [ ] **Images Load:** Ensure all photos from `src/config/images.ts` are displaying correctly.
- [ ] **Forms Work:** Test the contact form submission. Check your browser console (or Vercel logs) to ensure the API route returns success.
- [ ] **Mobile Responsive:** Check the site on a mobile device to ensure the sticky header and footer look good.
- [ ] **Analytics:** If using Google Analytics, add your Measurement ID to the `.env` variables and update the `src/app/layout.tsx` if necessary.
- [ ] **Speed Test:** Run [Google PageSpeed Insights](https://pagespeed.web.dev/) on your new URL to ensure you are hitting the target LCP < 2.5s.

---

## Troubleshooting

### Build Errors
If the build fails, check the "Build Log" in the Vercel dashboard. Common issues include:
- Missing dependencies (run `npm install` locally and push).
- TypeScript errors (check your local terminal).

### Form Not Working
- If the form fails silently, check the Vercel "Functions" logs. It is likely a server-side validation error.
- Remember: The form currently logs to console. To send real emails, you need to integrate an email service API in `src/app/api/contact/route.ts`.

## Support
If you encounter issues during deployment that are not covered here, please refer to the [Vercel Documentation](https://vercel.com/docs) or contact Pegrio support.