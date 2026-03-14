# Client Handoff Guide: Bright Smile Dental

Congratulations on your new website! This guide explains how you can manage and update the content of your Bright Smile Dental site without needing a developer.

---

## 🎨 Changing Images

We have made changing photos incredibly simple. **You do not need to search through code files.**

### How to do it:
1. Open the folder structure in your code editor (like VS Code).
2. Navigate to the file: `src/config/images.ts`.
3. You will see a list of image slots (e.g., `hero`, `about`, `service-general`).

### Example:
```typescript
"hero": {
  src: "https://images.unsplash.com/photo-...", // <--- Replace THIS LINK
  alt: "Smiling patient",                      // <--- Update THIS TEXT
  width: 1200,
  height: 800,
},
```

### Steps to swap a photo:
1. Find the URL of your new photo (it must be hosted online, e.g., Unsplash, or your file host).
2. Paste it where the `src` link currently is.
3. Update the `alt` text to describe your new photo.
4. Save the file.
5. Your website updates automatically!

**Tip:** For best results, use landscape photos (width larger than height) for banners and square photos for team members.

---

## 🎨 Changing Colors

The main colors of your brand (the Blue, Teal, and Red accents) are controlled in one place.

1. Open the file: `tailwind.config.ts`.
2. Look for the `colors` section.
3. You will see `primary` (Blue), `secondary` (Teal), and `accent` (Red).
4. Change the Hex codes (e.g., `#0056b3`) to your desired colors.
5. Save.

---

## ✏️ Updating Text Content

If you need to change the words on the homepage or other pages:

1. Go to `src/app/`.
2. Open `page.tsx` (for Home), `about/page.tsx`, `services/page.tsx`, or `contact/page.tsx`.
3. You will see the text mixed in with the code. You can simply edit the text inside the quote marks.
   *Example:* Change `h1` content to update your main headline.
4. Save.

**Note:** Be careful not to delete any brackets `{ }`, `< >`, or quote marks `""`. These are necessary for the code to work.

---

## 📞 Requesting Major Changes

If you want to change the layout, add new pages, or create new features, it is best to contact Pegrio support.

*   **Email:** showcase@pegrio.com
*   **Subject:** Change Request for Bright Smile Dental

---

## 🚀 Hosting & Maintenance

Your website is hosted on Vercel. This platform handles automatic backups, security updates, and speed optimization automatically.

### Updating the Site
1. Make your changes in the code editor.
2. Commit the changes (Save & Push to Git).
3. Vercel will automatically detect the change and update your live site within 1-2 minutes.

### Monitoring
You can log in to your Vercel dashboard anytime to see how many people are visiting your site or if there are any errors.

---

Thank you for choosing Pegrio for your digital growth!