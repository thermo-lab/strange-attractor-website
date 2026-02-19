import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // 1. The full URL to your site (optional but good practice)
  site: 'https://thermo-lab.github.io',
  
  // 2. The crucial part: Your repo name with a leading slash
  base: '/strange-attractor-website', 
  
  integrations: [tailwind()]
});