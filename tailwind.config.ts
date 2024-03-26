import type { Config } from "tailwindcss";

import svgToDataUri from "mini-svg-data-uri";
// import { colors } from "tailwindcss/colors";
const defaultTheme = require("tailwindcss/defaultTheme");
 
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
 
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        shimmer: "shimmer 2s linear infinite",
      },
      fontFamily: {
        sans: [
          '"Inter var", sans-serif',
          {
            fontFeatureSettings: '"cv11", "ss01"',
            fontVariationSettings: '"opsz" 32',
          },
        ],
      },

      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          hovered: "hsl(var(--card-hovered))",
          foreground: "hsl(var(--card-foreground))",
        },
        "error-label": {
          DEFAULT: "hsl(var(--error-label))",
        },

        "difficulty-beginner":
          "hsl(var(--difficulty-beginner) / <alpha-value>)",
        "difficulty-easy": "hsl(var(--difficulty-easy) / <alpha-value>)",
        "difficulty-medium": "hsl(var(--difficulty-medium) / <alpha-value>)",
        "difficulty-hard": "hsl(var(--difficulty-hard) / <alpha-value>)",
        "difficulty-extreme": "hsl(var(--difficulty-extreme) / <alpha-value>)",
        "difficulty-beginner-dark":
          "hsl(var(--difficulty-beginner-dark) / <alpha-value>)",
        "difficulty-easy-dark":
          "hsl(var(--difficulty-easy-dark) / <alpha-value>)",
        "difficulty-medium-dark":
          "hsl(var(--difficulty-medium-dark) / <alpha-value>)",
        "difficulty-hard-dark":
          "hsl(var(--difficulty-hard-dark) / <alpha-value>)",
        "difficulty-extreme-dark":
          "hsl(var(--difficulty-extreme-dark) / <alpha-value>)",
      },
      boxShadow: {
        beginner: "0 0 1rem -0.15rem hsl(var(--difficulty-beginner))",
        easy: "0 0 1rem -0.15rem hsl(var(--difficulty-easy))",
        medium: "0 0 1rem -0.15rem hsl(var(--difficulty-medium))",
        hard: "0 0 1rem -0.15rem hsl(var(--difficulty-hard))",
        extreme: "0 0 1rem -0.15rem hsl(var(--difficulty-extreme))",
        "beginner-dark":
          "0 0 1rem -0.15rem hsl(var(--difficulty-beginner-dark))",
        "easy-dark": "0 0 1rem -0.15rem hsl(var(--difficulty-easy-dark))",
        "medium-dark": "0 0 1rem -0.15rem hsl(var(--difficulty-medium-dark))",
        "hard-dark": "0 0 1rem -0.15rem hsl(var(--difficulty-hard-dark))",
        "extreme-dark": "0 0 1rem -0.15rem hsl(var(--difficulty-extreme-dark))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }: { matchUtilities: any; theme: any }) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
    require("daisyui"),
  ],
};

function addVariablesForColors({ addBase, theme }: { addBase: any; theme: any }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
export default config;