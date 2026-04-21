/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pesona: {
          Light: "#00AEEF",
          DEFAULT: "#0054A6",
          Darkp: "#003366",
        },
      },
      backgroundImage: {
        "blue-gradient": "linear-gradient(135deg, #0054A6 0%, #00AEEF 100%)",
        "blue-gradient-r": "linear-gradient(to right, #003366, #0054A6)",
      },
      boxShadow: {
        navbar:
          "0 4px 24px rgba(0, 54, 102, 0.08), 0 1px 4px rgba(0,54,102,0.04)",
        dropdown:
          "0 8px 32px rgba(0, 54, 102, 0.12), 0 2px 8px rgba(0,54,102,0.06)",
        cta: "0 2px 12px rgba(0, 84, 166, 0.3)",
        "cta-hover": "0 4px 20px rgba(0, 84, 166, 0.4)",
      },
      // SEMUA KEYFRAMES DIGABUNG DISINI
      keyframes: {
        dropIn: {
          "0%": {
            opacity: "0",
            transform: "translateX(-50%) translateY(-6px)",
          },
          "100%": { opacity: "1", transform: "translateX(-50%) translateY(0)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floatY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        floatX: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(10px)" },
        },
        tickerMove: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      // SEMUA ANIMATION DIGABUNG DISINI
      animation: {
        "drop-in": "dropIn 0.18s ease",
        "fade-up": "fadeUp 0.7s ease-out forwards", // forwards agar text tidak hilang setelah animasi
        "float-y": "floatY 5s ease-in-out infinite",
        "float-x": "floatX 7s ease-in-out infinite",
        ticker: "tickerMove 20s linear infinite",
      },
    },
  },
  plugins: [],
};
