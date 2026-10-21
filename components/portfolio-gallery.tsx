/**
 * Galeri portofolio dengan layout masonry.
 *
 * Gambar disusun dalam kolom-kolom (1 kolom di mobile, 2 mulai `sm`, 3 mulai
 * `lg`) dan setiap gambar tampil dengan tinggi aslinya, sehingga gambar
 * berbeda rasio saling mengisi celah seperti susunan batu bata.
 *
 * Masonry dibuat dengan CSS multi-column (`columns-*`): tanpa JavaScript dan
 * tanpa library tambahan. Konsekuensinya, urutan item mengalir dari atas ke
 * bawah per kolom (bukan kiri ke kanan per baris).
 */
import type { ComponentProps } from "react"
import Image, { type StaticImageData } from "next/image"

import { cn } from "@/lib/utils"

// Gambar di `public/portofolio/` saat ini masih placeholder (bertuliskan
// "CONTOH · rasio"). Untuk menggantinya dengan foto asli, cukup timpa file
// dengan nama yang sama. Rasio di placeholder adalah saran rasio foto
// pengganti agar susunan masonry tetap seimbang.
import brosurFlyer from "@/public/portofolio/brosur-flyer.webp"
import bukuCompanyProfile from "@/public/portofolio/buku-company-profile.webp"
import kalender from "@/public/portofolio/kalender.webp"
import kaosSeragam from "@/public/portofolio/kaos-seragam.webp"
import kartuNama from "@/public/portofolio/kartu-nama.webp"
import kemasan from "@/public/portofolio/kemasan.webp"
import neonBox from "@/public/portofolio/neon-box.webp"
import papanNama from "@/public/portofolio/papan-nama.webp"
import spandukBaliho from "@/public/portofolio/spanduk-baliho.webp"
import stikerLabel from "@/public/portofolio/stiker-label.webp"
import totebag from "@/public/portofolio/totebag.webp"
import xBanner from "@/public/portofolio/x-banner.webp"

/** Satu item galeri. */
type PortfolioItem = {
  /** Gambar hasil import statis (ukuran & blur placeholder dibaca otomatis). */
  image: StaticImageData
  /** Lini layanan, tampil sebagai label kecil di pojok kiri atas. */
  category: "Digital Printing" | "Offset" | "Sablon" | "Reklame"
  /** Nama produk; juga dipakai sebagai teks `alt` gambar. */
  title: string
  /** Deskripsi singkat satu kalimat. */
  description: string
}

/**
 * Daftar karya yang ditampilkan, berurutan sesuai aliran kolom masonry.
 * Rasio gambar sengaja diselang-seling agar kolom tidak rata.
 */
const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    image: spandukBaliho,
    category: "Digital Printing",
    title: "Spanduk & Baliho",
    description: "Promosi acara, toko, dan kampanye dalam ukuran besar.",
  },
  {
    image: kaosSeragam,
    category: "Sablon",
    title: "Kaos & Seragam",
    description: "Sablon kaos komunitas, acara, dan seragam kantor.",
  },
  {
    image: kartuNama,
    category: "Offset",
    title: "Kartu Nama",
    description: "Pilihan kertas dan finishing untuk kartu nama karyawan.",
  },
  {
    image: xBanner,
    category: "Digital Printing",
    title: "X-Banner & Roll Up",
    description: "Media promosi portabel untuk pameran dan depan toko.",
  },
  {
    image: neonBox,
    category: "Reklame",
    title: "Neon Box & Huruf Timbul",
    description: "Signage menyala untuk fasad toko dan kantor.",
  },
  {
    image: kalender,
    category: "Offset",
    title: "Kalender",
    description: "Kalender dinding dan meja untuk hadiah klien.",
  },
  {
    image: stikerLabel,
    category: "Digital Printing",
    title: "Stiker & Label",
    description: "Stiker vinyl dan label produk, dipotong sesuai bentuk.",
  },
  {
    image: brosurFlyer,
    category: "Offset",
    title: "Brosur & Flyer",
    description: "Materi promosi cetak dalam jumlah besar.",
  },
  {
    image: totebag,
    category: "Sablon",
    title: "Totebag & Merchandise",
    description: "Totebag dan merchandise untuk souvenir acara.",
  },
  {
    image: kemasan,
    category: "Offset",
    title: "Kemasan & Paper Bag",
    description: "Box produk dan tas kertas dengan logo brand.",
  },
  {
    image: papanNama,
    category: "Reklame",
    title: "Papan Nama & Billboard",
    description: "Papan nama usaha hingga reklame luar ruang.",
  },
  {
    image: bukuCompanyProfile,
    category: "Offset",
    title: "Buku & Company Profile",
    description: "Buku, katalog, dan company profile perusahaan.",
  },
]

/**
 * Komponen galeri portofolio masonry.
 *
 * Menerima semua props bawaan elemen `<div>`; `className` dari luar digabung
 * dengan class default melalui `cn()`.
 *
 * @example
 * <PortfolioGallery className="mt-12" />
 */
export function PortfolioGallery({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      // `gap-4` di sini mengatur jarak antar-kolom; jarak vertikal antar-item
      // diatur oleh `mb-4` pada tiap <figure>.
      className={cn("columns-1 gap-4 sm:columns-2 lg:columns-3", className)}
      {...props}
    >
      {PORTFOLIO_ITEMS.map((item) => (
        <figure
          key={item.title}
          // `break-inside-avoid` mencegah satu kartu terpotong ke dua kolom.
          // `group` dipakai untuk efek hover pada gambar di dalamnya.
          className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-card"
        >
          <Image
            src={item.image}
            alt={item.title}
            placeholder="blur"
            // Lebar tampil tiap kolom: 1/3 kontainer (maks. ±370px) di `lg`,
            // setengah layar di `sm`, dan selebar layar di mobile.
            sizes="(min-width: 1024px) 370px, (min-width: 640px) 50vw, 100vw"
            // `h-auto` menjaga rasio asli gambar, kunci tampilan masonry.
            className="h-auto w-full transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none"
          />

          {/* Label kategori berefek kaca, senada dengan Navbar. */}
          <span className="absolute top-3 left-3 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
            {item.category}
          </span>

          {/* Keterangan di bawah gambar. Gradasi hitam agar teks putih
              tetap terbaca di atas foto apa pun. */}
          <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/85 via-black/50 to-transparent p-5 pt-16">
            <h3 className="font-heading text-lg font-bold text-white">
              {item.title}
            </h3>
            <p className="mt-1 text-sm text-pretty text-white/75">
              {item.description}
            </p>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}
