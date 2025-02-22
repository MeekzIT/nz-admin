import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // host: "185.170.196.1", // Set the host to your desired IP
    port: 3000, // Specify the port
    open: true, // This will open the browser automatically
  },
});
