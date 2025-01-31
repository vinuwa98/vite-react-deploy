import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      base: path.resolve(__dirname, 'vite-react-deploy'), // Use path.resolve for correct aliasing
    },
  },
});
