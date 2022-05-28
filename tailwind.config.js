// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "smooth-bounce": {
          "0%, 100%": {
            transform: "translateY(0) translateX(0)",
          },
          "25%": {
            transform: "translateY(-10px) translateX(-10px)",
          },
          "50%": {
            transform: "translateY(-20px) translateX(-20px)",
          },
          "75%": {
            transform: "translateY(-10px) translateX(-10px)",
          },
        },
      },
      animation: {
        "bounce-once": "smooth-bounce 0.5s linear 1",
      },
    },
  },
  plugins: [],
};
