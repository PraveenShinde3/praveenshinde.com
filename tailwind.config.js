/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
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
          foreground: "hsl(var(--card-foreground))",
        },
      },
      typography(theme) {
        return {
          dark: {
            css: {
              color: theme("colors.muted.foreground"),
              '[class~="lead"]': { color: theme("colors.muted.foreground") },
              a: { color: theme("colors.foreground") },
              strong: { color: theme("colors.foreground") },
              "ul > li::before": {
                backgroundColor: theme("colors.muted.foreground"),
              },
              hr: { borderColor: theme("colors.gray.800") },
              blockquote: {
                color: theme("colors.muted.foreground"),
                borderLeftColor: theme("colors.muted.foreground"),
              },
              h1: { color: theme("colors.foreground") },
              h2: { color: theme("colors.foreground") },
              h3: { color: theme("colors.foreground") },
              h4: { color: theme("colors.foreground") },
              code: { color: theme("colors.foreground") },
              "a code": { color: theme("colors.foreground") },
              pre: {
                color: theme("colors.foreground"),
                backgroundColor: "transparent",
              },
              thead: {
                color: theme("colors.foreground"),
                borderBottomColor: theme("colors.muted"),
              },
              "tbody tr": { borderBottomColor: theme("colors.muted") },
            },
          },
        };
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "media",
};
