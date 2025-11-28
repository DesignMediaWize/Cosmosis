import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  // Cast process to any to avoid TypeScript error about missing 'cwd' property.
  const env = loadEnv(mode, (process as any).cwd(), '');

  return {
    plugins: [react()],
    define: {
      // Define process.env.API_KEY globally so it works in the browser.
      // This replaces instances of process.env.API_KEY in your code with the actual string value during the build.
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
    },
  };
});