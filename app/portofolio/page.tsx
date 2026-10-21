/**
 * Halaman Portofolio (route `/portofolio`).
 *
 * Berisi judul halaman dan galeri masonry hasil cetak dari empat lini
 * layanan Mia Printing.
 */
import type { Metadata } from "next"

import { PortfolioGallery } from "@/components/portfolio-gallery"

/** Menimpa metadata default dari `app/layout.tsx` untuk halaman ini. */
export const metadata: Metadata = {
  title: "Portofolio | Mia Printing",
  description:
    "Hasil cetak Mia Printing: spanduk, stiker, brosur, kartu nama, kalender, kemasan, sablon kaos, hingga neon box dan papan nama.",
}

export default function PortofolioPage() {
  return (
    // Class `dark` mengaktifkan token warna mode gelap (lihat `.dark` di
    // globals.css) khusus untuk halaman ini. Latar gelap membuat foto lebih
    // menonjol dan menjaga teks putih Navbar kaca tetap terbaca.
    <main className="dark flex flex-1 flex-col bg-background text-foreground">
      {/* `pt-32` memberi ruang untuk Navbar yang mengambang (fixed). */}
      <div className="mx-auto w-full max-w-6xl px-4 pt-32 pb-24 sm:px-6">
        <header className="max-w-2xl">
          <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
            Portofolio
          </p>
          <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Hasil Cetak Pilihan Kami
          </h1>
          <p className="mt-5 text-lg text-pretty text-muted-foreground">
            Dari selembar spanduk sampai ribuan brosur. Berikut sebagian hasil
            pekerjaan kami dari empat lini layanan: digital printing, offset,
            sablon, dan reklame.
          </p>
        </header>

        <PortfolioGallery className="mt-12" />
      </div>
    </main>
  )
}
