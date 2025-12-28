/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  // 1. IMPORTANT: Set darkMode to 'class' to work with next-themes
  darkMode: "class", 

  theme: {
    extend: {
      colors: {
        // ... (Your custom HSL color definitions are fine)
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
      
      // 2. Fix the typography configuration
      typography: (theme) => ({
        // You are configuring the 'dark' style. This style is applied 
        // when you use the 'prose-invert' class.
        dark: {
          css: {
            // THE CRUCIAL FIX: Redefine the CSS variables for headings and text
            // The default prose styles for 'dark' (or prose-invert) set these variables.
            // By defining these, you ensure all elements relying on them change color.
            '--tw-prose-body': theme('colors.muted.foreground'), // Base text color
            '--tw-prose-headings': theme('colors.foreground'), // <--- FIX: This will now be your light text color (e.g., white)
            '--tw-prose-lead': theme('colors.muted.foreground'),
            '--tw-prose-links': theme('colors.foreground'),
            '--tw-prose-bold': theme('colors.foreground'),
            '--tw-prose-counters': theme('colors.muted.foreground'),
            '--tw-prose-bullets': theme('colors.muted.foreground'),
            '--tw-prose-hr': theme('colors.muted'),
            '--tw-prose-quotes': theme('colors.muted.foreground'),
            '--tw-prose-quote-borders': theme('colors.muted.foreground'),
            '--tw-prose-captions': theme('colors.muted.foreground'),
            '--tw-prose-code': theme('colors.foreground'),
            '--tw-prose-pre-code': theme('colors.foreground'),
            '--tw-prose-pre-bg': 'transparent', // Use transparent if your custom component handles the background
            '--tw-prose-th-borders': theme('colors.muted'),
            '--tw-prose-td-borders': theme('colors.muted'),

            // Keep only the necessary overrides where the variable isn't used
            // OR where you want to explicitly override the prose styles.
            
            // Note: Since you redefined the variables above, the following direct
            // overrides for h1, h2, h3, h4 are now largely redundant but can be kept
            // for safety or if they use more complex styling rules:
            
            // These lines are likely what caused the issue by overriding the CSS variables:
            h1: { color: 'var(--tw-prose-headings)' }, 
            h2: { color: 'var(--tw-prose-headings)' },
            h3: { color: 'var(--tw-prose-headings)' },
            h4: { color: 'var(--tw-prose-headings)' }, 
            
            // The rest of your block is fine, as it overrides specific element styles:
            '[class~="lead"]': { color: theme("colors.muted.foreground") },
            a: { color: theme("colors.foreground") },
            strong: { color: theme("colors.foreground") },
            "ul > li::before": {
              backgroundColor: theme("colors.muted.foreground"),
            },
            hr: { borderColor: theme("colors.gray.800") }, // Can simplify to 'var(--tw-prose-hr)'
            blockquote: {
              color: theme("colors.muted.foreground"),
              borderLeftColor: theme("colors.muted.foreground"),
            },
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
      }),

      // ... (Your other extensions)
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};