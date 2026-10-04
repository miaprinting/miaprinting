/**
 * Konfigurasi PostCSS.
 *
 * Plugin `@tailwindcss/postcss` memproses Tailwind CSS v4 pada saat build:
 * membaca `app/globals.css` dan menghasilkan utility class yang dipakai.
 * Tailwind v4 tidak membutuhkan `tailwind.config.js`; tema diatur langsung di
 * CSS lewat blok `@theme`.
 */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
