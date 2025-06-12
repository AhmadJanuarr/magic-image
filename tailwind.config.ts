// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        infiniteDash: {
          "100%": {
            backgroundPosition: "4px 0, -4px 100%, 0 -4px, 100% 4px",
          },
        },
      },
      animation: {
        infiniteDash: "infiniteDash 0.3s infinite linear",
      },
    },
  },
  plugins: [],
};

export default config;
