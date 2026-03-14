# Deployment Guide for Bright Smile Dental Website

## Step-by-Step Vercel Deployment
1. **Create a Vercel Account**
   - Go to [Vercel](https://vercel.com/) and sign up for an account.

2. **Import Project**
   - Click on "New Project" and import your GitHub repository.

3. **Configure Environment Variables**
   - In the Vercel dashboard, navigate to your project settings.
   - Under the "Environment Variables" section, add the following:
     - `NEXT_PUBLIC_API_URL`: Your API base URL.

4. **Deploy**
   - Click on "Deploy" to start the deployment process.

## Domain Setup Instructions
1. In the Vercel dashboard, go to the "Domains" section.
2. Add your custom domain (if you have one) and follow the instructions to configure DNS settings.

## Post-Deploy Checklist
- Ensure SSL is enabled for your domain.
- Set up any necessary redirects.
- Configure analytics if needed (Google Analytics, etc.).