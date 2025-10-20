module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-900': '#041022',
        'bg-800': '#07142a',
        'muted': '#9aa8bb',
        'accent-1': '#06b6d4',
        'accent-2': '#10b981',
        'accent-3': '#d946ef',
        'accent-4': '#f59e0b',
      },
      backgroundImage: {
        'hero-pattern': "radial-gradient(900px 380px at 8% 18%, rgba(6,182,212,0.035), transparent 18%), radial-gradient(700px 300px at 92% 82%, rgba(16,185,129,0.03), transparent 18%)",
      },
    },
  },
  plugins: [],
}