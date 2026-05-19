# Keystatic in Astro

This template shows how you can use Keystatic in an Astro site.

To setup:

```bash
npm install
```

To run:

```
npm run dev
```

Admin UI: [http://127.0.0.1:4321/keystatic](http://127.0.0.1:4321/keystatic)

Homepage: [http://localhost:4321](http://localhost:4321)

## Keystatic on Vercel

The site uses local storage during development and GitHub storage in production.

Set these environment variables in Vercel for the `Production` and `Preview` environments:

```bash
KEYSTATIC_GITHUB_CLIENT_ID=
KEYSTATIC_GITHUB_CLIENT_SECRET=
KEYSTATIC_SECRET=
PUBLIC_KEYSTATIC_GITHUB_APP_SLUG=keystatic-que-sono
```

Then redeploy the project. If you want to test GitHub storage locally, copy the same values into a local `.env.local` file.
