// @lovable.dev/vite-tanstack-config already includes TanStack Start, React,
// Tailwind, tsconfig paths, env injection, aliases and related defaults.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

export default defineConfig({
  // This project deploys on Vercel, so use Nitro's Vercel preset and
  // disable the Cloudflare-specific build path from the wrapper.
  cloudflare: false,
  plugins: [nitro({ preset: "vercel" })],
});
