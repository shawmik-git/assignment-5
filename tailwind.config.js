/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#FFFFFF",
          soft: "#FAFAFC",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          2: "#F5F4F9",
        },
        line: "#ECEAF3",
        ink: {
          DEFAULT: "#14121F",
          muted: "#6B6478",
          faint: "#9A93A8",
        },
        brand: {
          orange: "#FF7A45",
          pink: "#FF3D8F",
          violet: "#8B5CF6",
        },
        category: {
          frontend: "#2F80ED",
          backend: "#12A576",
          database: "#E08A1E",
          language: "#8B5CF6",
          styling: "#EC4899",
          devops: "#0EA5B7",
          tools: "#F43F5E",
        },
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #FF7A45 0%, #FF3D8F 50%, #8B5CF6 100%)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
};
