import { defineConfig } from "@twind/core";
import presetAutoprefix from "@twind/preset-autoprefix";
import presetTailwind from "@twind/preset-tailwind";

export const screens = {
  "small-mobile": "320px",
  mobile: "375px",
  "max-mobile": "428px",
  tablet: "768px",
  "small-desktop": "992px",
};

const config = defineConfig({
  presets: [presetAutoprefix(), presetTailwind()],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/utils/**/*.{js,ts,jsx,tsx}",
  ],
  hash: false,
  theme: {
    extend: {
      screens: screens,
    },
  },
});
export { config };
