---
description: How to deploy the portfolio to Vercel
---

1. Ensure all your images (profile.jpg, certificates/) and CV (cv.docx) are in the `public/` folder.
2. Run `npm run build` to make sure there are no errors.
3. **Option A: Vercel CLI (Quickest)**
   - Run `npx vercel` in the `portfolio-tanmay` directory.
   - Follow the prompts to log in and deploy.
4. **Option B: GitHub (Recommended for updates)**
   - Create a new repository on GitHub.
   - Run `git init`, `git add .`, `git commit -m "Initial commit"`.
   - Push your code to GitHub.
   - Connect your GitHub repository to Vercel at [vercel.com](https://vercel.com).
