import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FAF7F0",
        foreground: "#1F2933",
        muted: "#F0E7D8",
        accent: "#C9A227"
      }
    }
  },
  plugins: []
};

export default config;
