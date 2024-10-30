import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'page-gradient': "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
      }
    },
  },
  plugins: [],
};
export default config;
