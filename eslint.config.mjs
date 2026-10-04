/**
 * Konfigurasi ESLint (format "flat config", ESLint v9).
 *
 * Dijalankan lewat `npm run lint`.
 */
import { defineConfig, globalIgnores } from "eslint/config";
// Aturan Next.js + Core Web Vitals (performa & best practice halaman).
import nextVitals from "eslint-config-next/core-web-vitals";
// Aturan tambahan untuk TypeScript.
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  // Folder/file hasil build & file yang di-generate otomatis tidak perlu dicek.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
