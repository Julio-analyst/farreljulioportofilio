## Project Context

This repository is a personal portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

Current structure:

- Content source lives in `src/data/portfolio.ts`.
- Language handling lives in `src/components/language-provider.tsx` and `src/components/localized-text.tsx`.
- Shared layout lives in `src/components/site-shell.tsx` and `src/components/site-header.tsx`.
- Main pages live under `src/app/`.

What is already implemented:

- Bilingual ID/EN UI with `?lang=` support and browser-language fallback.
- Animated language toggle in the header.
- Home, Resume, Portfolio, and Achievements pages populated from the portfolio data file.
- Centralized reusable shell, header, footer, and localized text helper.
- Home branding now focuses on Data Science, Data Engineering, AI & Automation, ML, and Cloud Analytics.
- Portfolio includes both featured projects and a grouped repository library for all public repos.
- Achievements includes a certificate section scaffold that can be filled from LinkedIn or uploaded files later.
- Header/footer use simplified naming and public LinkedIn branding assets.

Versioning / backup:

- A local snapshot of the current state was created at `.backups/2026-05-16-pre-revision`.
- Use that folder as the rollback reference before applying the next revision set.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Quick deploy steps (recommended: Vercel)

1. Push your repo to GitHub (create a remote repo first).

```bash
git add .
git commit -m "chore: prepare for deployment"
# create a GitHub repo and then:
git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

2. Sign in to https://vercel.com and import the GitHub repository. Vercel auto-detects Next.js and sets build settings automatically.

3. Add a custom domain in Vercel (optional):
	- In Vercel dashboard → Project → Domains → Add.
	- Point your DNS to Vercel. For apex/root domain add A records to Vercel's IPs and for subdomains use CNAME to cname.vercel-dns.com.

4. Environment variables (if any): Add them under Project → Settings → Environment Variables.

5. After import, Vercel will build and deploy automatically. Visit the provided URL or assign your custom domain.

### DNS and domain tips

- For most registrars, add the records Vercel shows after adding your domain. Use `A` records for apex and `CNAME` for subdomains.
- If using Cloudflare, keep proxying disabled for the domain when setting up (orange cloud off) until verification completes.

If you want, I can create a local commit now and help prepare a GitHub push command; I cannot create a GitHub repo or add DNS records without your credentials.
