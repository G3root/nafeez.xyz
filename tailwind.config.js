const {  fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    
    extend: {
      colors: {
        gray: {
          0: '#fff',
          100: '#fafafa',
          200: '#eaeaea',
          300: '#999999',
          400: '#888888',
          500: '#666666',
          600: '#444444',
          700: '#333333',
          800: '#222222',
          900: '#111111'
        }
      },
      fontFamily: {
        sans: ['Inter var', ...fontFamily.sans],
        cal: ["Cal Sans",  ...fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/forms'),require("tailwindcss-radix")({
    // Default: `radix`
    variantPrefix: "rdx",
    // Default: `false`
    // Cannot be enabled in combination with `variantPrefix: ""`
    skipAttributeNames: false,
  }),],
}
