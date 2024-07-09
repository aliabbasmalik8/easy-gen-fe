import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "auth-bg": "#FCFDFF",
        "blue-2": "#E1E9FE",
        "blue-6": "#5A87F8",
        "blue-7": "#2862F6",
        "gray-1": "#F1F3F6",
        "gray-2": "#E0E4EA",
        "gray-3": "#C8CED9",
        "gray-6": "#5B6B86",
        "gray-10": "#15181E",
        "dark-6": "#25262B",
        "dark-9": "#101113",
        "red-6": "#FA5252",
      },
    },
  },
  plugins: [],
};
export default config;
