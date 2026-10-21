/**
 * Isi sementara untuk halaman yang kontennya belum dibuat ("segera hadir").
 *
 * Dipakai oleh `/tentang`, `/layanan`, dan `/kontak` agar link di Navbar
 * tidak berujung ke halaman 404. Saat konten halaman sudah siap, ganti
 * pemakaian komponen ini di `page.tsx` halaman tersebut.
 */
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/**
 * Komponen halaman "segera hadir".
 *
 * @param eyebrow - Label kecil di atas judul (nama halaman).
 * @param title - Judul utama halaman.
 *
 * @example
 * <ComingSoon eyebrow="Kontak" title="Hubungi Kami" />
 */
export function ComingSoon({
  eyebrow,
  title,
}: {
  eyebrow: string
  title: string
}) {
  return (
    // Latar gelap (class `dark`) seperti halaman Portofolio, agar teks putih
    // Navbar kaca tetap terbaca.
    <main className="dark flex flex-1 flex-col bg-background text-foreground">
      {/* `flex-1` + `justify-center`: isi berada di tengah layar secara
          vertikal. `py-32` memberi ruang untuk Navbar yang mengambang. */}
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 py-32 sm:px-6">
        <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-2xl font-heading text-4xl font-bold tracking-tight text-balance sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-xl text-lg text-pretty text-muted-foreground">
          Halaman ini sedang kami siapkan. Sementara itu, lihat contoh hasil
          cetak kami di halaman Portofolio.
        </p>
        {/* Tombol kaca, sama dengan tombol "Pesan Sekarang" di Hero.
            `cn()` diperlukan agar class di sini menimpa class bawaan
            `buttonVariants` yang bentrok (mis. `rounded-lg`, `text-sm`). */}
        <Link
          href="/portofolio"
          className={cn(
            buttonVariants({
              className:
                "mt-10 h-12 self-start rounded-full border-white/15 bg-white/10 px-6 text-base text-white backdrop-blur-sm hover:bg-white/20 has-data-[icon=inline-end]:pr-5",
            })
          )}
        >
          Lihat Portofolio
          <ArrowRight
            data-icon="inline-end"
            className="transition-transform group-hover/button:translate-x-0.5"
          />
        </Link>
      </div>
    </main>
  )
}
