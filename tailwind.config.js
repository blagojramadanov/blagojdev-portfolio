/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./impressum.html"],
  theme: {
    extend: {
      colors: {
        crt: {
          bg: "#050a07",
          panel: "#0a130d",
          screen: "#081109",
          bezel: "#15100a",
          green: "#4dff8f",
          greendim: "#1f7a45",
          amber: "#ffb347",
          cyan: "#5ff3ff",
          ink: "#c8ffd9",
        },
      },
      fontFamily: {
        mono: ["'Share Tech Mono'", "'JetBrains Mono'", "ui-monospace", "monospace"],
        display: ["'VT323'", "'Share Tech Mono'", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 6px rgba(77,255,143,0.55), 0 0 22px rgba(77,255,143,0.25)",
        "glow-amber": "0 0 6px rgba(255,179,71,0.55), 0 0 22px rgba(255,179,71,0.25)",
        bezel: "0 0 0 2px rgba(77,255,143,0.15), 0 18px 45px rgba(0,0,0,0.65), inset 0 0 40px rgba(0,0,0,0.6)",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.15" },
        },
        "boot-in": {
          "0%": { opacity: "0", transform: "scaleY(0.02)", filter: "brightness(3)" },
          "40%": { opacity: "1", transform: "scaleY(1.02)", filter: "brightness(1.4)" },
          "100%": { opacity: "1", transform: "scaleY(1)", filter: "brightness(1)" },
        },
      },
      animation: {
        blink: "blink 1.6s ease-in-out infinite",
        "boot-in": "boot-in 900ms ease-out both",
      },
    },
  },
  plugins: [],
};
