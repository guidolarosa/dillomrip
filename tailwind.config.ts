import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fog: {
          "0%, 50%, 100%": { transform: "translate(0px)" },
          "25%": { transform: "translate(-320px)" },
          "75%": { transform: "translate(320px)" },
        },
        fade: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        floatLight: {
          "0%, 32%, 50%, 72%, 100%": {
            transform: "translateY(0px) scale(1) rotate(0)",
            filter: "drop-shadow(0 0 20px white)",
          },
          "14%": {
            transform: "translateY(-10px) scale(1.2)  rotate(2deg)",
            filter: "drop-shadow(0 0 10px white)",
          },
          "42%": {
            transform: "translateY(10px) scale(1.1)  rotate(-1.5deg)",
            filter: "drop-shadow(0 0 10px white)",
          },
          "60%": {
            transform: "translateY(10px) scale(1.15)  rotate(1deg)",
            filter: "drop-shadow(0 0 10px white)",
          },
          "91%": {
            transform: "translateY(10px) scale(1.1)  rotate(-2deg)",
            filter: "drop-shadow(0 0 10px white)",
          },
        },
        bookFloat: {
          "0%, 100%": {
            transform: "translateY(-24px)",
          },
          "50%": {
            transform: "translateY(24px)",
          },
        },
        float: {
          "0%, 32%, 50%, 72%, 100%": {
            transform: "translateY(0px) scale(1) rotate(0)",
          },
          "14%": {
            transform: "translateY(-10px) scale(1.2)  rotate(2deg)",
          },
          "42%": {
            transform: "translateY(10px) scale(1.1)  rotate(-1.5deg)",
          },
          "60%": {
            transform: "translateY(10px) scale(1.15)  rotate(1deg)",
          },
          "91%": {
            transform: "translateY(10px) scale(1.1)  rotate(-2deg)",
          },
        },
        fadeup: {
          "0%": {
            opacity: "0",
            transform: "translateY(32px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        offerfadeup: {
          "0%": {
            opacity: "0",
            pointerEvents: "none",
          },
          "100%": {
            opacity: "1",
            pointerEvents: "auto",
          },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        fog: "fog 90s ease-in-out infinite",
        fog1: "fog 70s ease-in-out infinite",
        floatLight: "float 60s ease-in-out infinite",
        float: "float 60s ease-in-out infinite",
        fade: "fade 0.25s ease-out forwards",
        fadeup: "fadeup 0.25s ease-out forwards",
        wiggle: "wiggle 5s ease-in-out infinite",
        offerfadeup: "offerfadeup 1s ease-out infinite",
        bookFloat: "bookFloat 30s ease-in-out infinite"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
