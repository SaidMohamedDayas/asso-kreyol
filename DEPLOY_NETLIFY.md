# Deploying to Netlify

## Project profile

- Framework: Next.js 16 App Router
- Language: JavaScript
- Deployment mode: standard Next.js build
- Static export: not used
- Recommended production branch: `main` or your repository's stable release branch

## Prerequisites

- Node.js `>=20.9.0`
- npm installed
- A Netlify site connected to this repository

## Local checks before pushing

Run these commands from the project root:

```bash
npm install
npm run lint
npm run build
```

If you want to preview the site locally after a production build:

```bash
npm run start
```

## Netlify build settings

Use these values in Netlify:

- Build command: `next build`
- Publish directory: `.next`

This project intentionally stays in standard Next.js mode. Do not switch it to a static export.

## Environment variables

There are currently no required application environment variables for this site.

If you add environment variables later:

- use `NEXT_PUBLIC_` only for values that must be available in the browser
- keep secrets server-side and do not expose them in client components
- add new variable names to this document before deployment

## Connect the repository to Netlify

1. Import the Git repository into Netlify.
2. Select the production branch you want to publish, usually `main`.
3. Confirm the build command is `next build`.
4. Confirm the publish directory is `.next`.
5. Save and trigger the first deployment.

## Redeploying

- Push a new commit to the production branch to trigger a new deploy automatically.
- Or open the site in Netlify and use **Trigger deploy** to redeploy manually.

## Notes

- `next.config.mjs` is kept simple and does not use `output: "export"`.
- Image assets are served from `public/` and local `next/image` paths.
- Keep `.env*` files out of Git. Only document variable names, never real secrets.
