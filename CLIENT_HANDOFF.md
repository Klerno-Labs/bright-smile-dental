# Bright Smile Dental Website Handoff

## What Was Built
We have created a responsive website for Bright Smile Dental, designed to attract and inform potential patients. The site includes:

- **Home Page**: Features a hero section, trust bar, interactive pain map, services preview, testimonials, team preview, and a call-to-action section.
- **About Page**: Showcases the practice's philosophy, technology, and team members.
- **Services Page**: Lists services with a search bar, accordion style service list, and a finance calculator.

## Changing Images
All images on the site are controlled from ONE file: `src/config/images.ts`. Each image slot has a comment explaining where it appears on the site.

### To Swap an Image:
1. Open `src/config/images.ts`.
2. Find the image slot you want to change (e.g., "hero").
3. Replace the `src` URL with your own image URL.
4. Update the `alt` text to describe the new image.
5. Save the file — the change will appear on every page that uses that image.

### Supported Formats:
- Any web-accessible image URL (Cloudinary, S3, Vercel Blob, etc.).
- For best results, use images at least 1200px wide, landscape orientation for heroes.

## Changing Logo
If a logo slot exists in `src/config/images.ts`, follow the same steps as above to swap it.

## Changing Colors
To modify the brand colors, edit the `tailwind.config.js` file. Change the color values to match your branding.

## Changing Fonts
To swap the Google Font, update the link in the `layout.tsx` file.

## Updating Text Content
To update text content, edit the respective page files in the `src/app/pages` directory.

## Requesting Changes from Pegrio
For any changes or updates, please contact Pegrio support via email.

## Hosting and Maintenance Info
The website is hosted on Vercel, which provides automatic deployments and SSL. Regular updates and maintenance can be requested through Pegrio.

## Contact
For support, reach out to Pegrio at support@pegrio.com.