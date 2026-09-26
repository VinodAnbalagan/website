import { defineConfig } from 'astro/config';

// Update `site` once the final URL is known (for example https://vinodanbalagan.is-a.dev)
export default defineConfig({
  site: 'https://vinodanbalagan.vercel.app',
  // Hides the Astro dev toolbar during `npm run dev`. It never appears on the live site anyway.
  devToolbar: { enabled: false },
});
