import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Allow access from any IP
    port: 3001, // Your development server port
    open: true,
    strictPort: true, // Ensures Vite only runs on the specified port
    cors: true, // Allows cross-origin requests
    allowedHosts: ["admin.nurazyanconstruction.am"], // Allow requests from your domain
  },
});
