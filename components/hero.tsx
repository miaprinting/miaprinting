/**
 * Section Hero — bagian paling atas halaman beranda.
 *
 * Menampilkan gambar latar layar penuh dengan overlay gelap, judul utama,
 * deskripsi singkat layanan, dan dua tombol aksi (CTA).
 */
import type { ComponentProps } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
// Import statis: Next.js otomatis membaca ukuran gambar dan membuat
// placeholder blur, sehingga `width`/`height` tidak perlu ditulis manual.
import heroBackground from "@/public/hero-background.webp"

/**
 * Komponen Hero.
 *
 * Menerima semua props bawaan elemen `<section>`, sehingga bisa diberi `id`,
 * `className` tambahan, dll. `className` dari luar digabung dengan class
 * default melalui `cn()` (class dari luar menang bila bertabrakan).
 *
 * @example
 * <Hero id="beranda" className="min-h-[80svh]" />
 */
export function Hero({ className, ...props }: ComponentProps<"section">) {
  return (
    <section
      className={cn(
        // `isolate` membuat stacking context baru, jadi gambar & overlay
        // ber-z-index negatif tetap berada di dalam section ini (tidak
        // tenggelam ke belakang <body>). `min-h-svh` = setinggi layar.
        "relative isolate flex w-full flex-col items-center justify-center min-h-svh overflow-hidden px-4 py-24 text-center",
        className
      )}
      {...props}
    >
      {/* Gambar latar. `alt=""` karena dekoratif. `preload` memasang <link
          rel="preload"> di <head> agar gambar (elemen terbesar di layar
          pertama / LCP) dimuat lebih cepat. */}
      <Image
        src={heroBackground}
        alt=""
        fill
        preload
        placeholder="blur"
        sizes="100vw"
        className="-z-20 object-cover"
      />
      {/* Overlay hitam transparan agar teks putih tetap terbaca di atas foto. */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-black/55" />
      <h1 className="font-heading max-w-4xl text-4xl font-bold tracking-tight text-balance text-white sm:text-6xl">
        Satu Tempat untuk Semua Kebutuhan Cetak Anda
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-pretty text-white/80 sm:text-xl">
        Digital printing, offset, sablon, hingga reklame untuk perusahaan maupun
        personal, dengan kualitas terbaik dan harga bersaing.
      </p>
      {/* Tombol CTA: bertumpuk vertikal di mobile, sejajar mulai breakpoint `sm`. */}
      <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
        {/* CTA utama (efek kaca/backdrop-blur).
            TODO: belum ada aksi — sambungkan ke form pemesanan atau WhatsApp. */}
        <Button className="h-12 rounded-full border-white/15 bg-white/10 px-6 text-base text-white backdrop-blur-sm hover:bg-white/20 has-data-[icon=inline-end]:pr-5">
          Pesan Sekarang
          {/* `data-icon="inline-end"` dibaca oleh Button untuk merapikan
              padding kanan. Ikon bergeser sedikit saat tombol di-hover
              (`group-hover/button` berasal dari class `group/button` di Button). */}
          <ArrowRight
            data-icon="inline-end"
            className="transition-transform group-hover/button:translate-x-0.5"
          />
        </Button>
        {/* CTA sekunder: link ke halaman Layanan dengan tampilan tombol
            `ghost`. `cn()` agar class di sini menimpa class bawaan
            `buttonVariants` yang bentrok (mis. `rounded-lg`, `text-sm`). */}
        <Link
          href="/layanan"
          className={cn(
            buttonVariants({
              variant: "ghost",
              className:
                "h-12 rounded-full px-6 text-base text-white hover:bg-white/10 hover:text-white has-data-[icon=inline-end]:pr-5 dark:hover:bg-white/10",
            })
          )}
        >
          Lihat Layanan
          <ArrowRight
            data-icon="inline-end"
            className="transition-transform group-hover/button:translate-x-0.5"
          />
        </Link>
      </div>
    </section>
  )
}
