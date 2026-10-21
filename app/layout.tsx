/**
 * Root layout aplikasi Mia Printing.
 *
 * Layout ini membungkus SELURUH halaman di dalam folder `app/`, sehingga apa
 * pun yang dirender di sini (font, tombol WhatsApp, analytics) akan muncul di
 * semua halaman. Next.js mewajibkan root layout memiliki tag `<html>` dan
 * `<body>`.
 */
import type { Metadata } from "next";
import { Comfortaa, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { Navbar } from "@/components/navbar"
import { WhatsAppButton } from "@/components/whatsapp-button"

// Font dimuat lewat `next/font/google` agar di-host sendiri oleh Next.js
// (tanpa request ke Google saat runtime). Opsi `variable` mendaftarkan font
// sebagai CSS variable yang kemudian dipetakan ke utility Tailwind di
// `globals.css` (`font-sans`, `font-mono`, `font-heading`).

/** Font utama untuk teks isi → `--font-geist-sans` → class `font-sans`. */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

/** Font monospace (kode/angka) → `--font-geist-mono` → class `font-mono`. */
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/** Font judul/heading → `--font-comfortaa` → class `font-heading`. */
const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
});

/**
 * Metadata default situs (tag `<title>` dan `<meta name="description">`).
 * Halaman turunan bisa menimpanya dengan meng-export `metadata` sendiri.
 */
export const metadata: Metadata = {
  title: "Mia Printing",
  description:
    "Satu tempat untuk semua kebutuhan cetak Anda: digital printing, offset, sablon, hingga reklame untuk perusahaan maupun personal dengan harga bersaing.",
};

/**
 * Komponen root layout.
 *
 * `LayoutProps<"/">` adalah helper tipe global dari Next.js (dibuat otomatis
 * saat `next dev`/`next build`), jadi tidak perlu di-import.
 *
 * @param children - Isi halaman aktif (misalnya `app/page.tsx`).
 */
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      // Bahasa Indonesia: membantu mesin pencari & screen reader membaca konten dengan benar.
      lang="id"
      // Daftarkan ketiga CSS variable font di elemen <html> supaya bisa
      // dipakai di seluruh dokumen.
      className={`${geistSans.variable} ${geistMono.variable} ${comfortaa.variable} h-full antialiased`}
    >
      {/* `flex flex-col` + `min-h-full` agar <main> di halaman bisa memakai
          `flex-1` untuk mengisi sisa tinggi layar. */}
      <body className="min-h-full flex flex-col">
        {/* Navbar kaca mengambang, tampil di semua halaman. */}
        <Navbar />
        {children}
        {/* Tombol chat WhatsApp mengambang, tampil di semua halaman. */}
        <WhatsAppButton />
        {/* Vercel Web Analytics: mencatat kunjungan halaman saat di-deploy ke Vercel. */}
        <Analytics />
      </body>
    </html>
  );
}
