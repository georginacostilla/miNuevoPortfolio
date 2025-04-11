module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins",
      },
      colors: {
        primary: '#F4B000',
        background: '#0E0E0E',
        surface: '#2A2A2A',
        text: '#FFFFFF',
        muted: '#B0B0B0',
      },
    },
  },
  plugins: [],
};
