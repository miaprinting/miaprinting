"use client"

/**
 * Navbar — bilah navigasi mengambang di bagian atas setiap halaman.
 *
 * Tampil sebagai "pil" kaca (glassmorphism): latar putih transparan +
 * `backdrop-blur`, sehingga foto Hero di belakangnya terlihat samar. Di layar
 * kecil (< `md`), daftar menu disembunyikan di balik tombol hamburger.
 *
 * Komponen ini adalah Client Component (`"use client"`) karena menyimpan
 * state buka/tutup menu mobile.
 */
import { useState, type ComponentProps } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import { NAV_ITEMS } from "@/lib/navigation"
import { cn } from "@/lib/utils"

/**
 * Efek kaca yang dipakai bersama oleh bilah utama dan panel menu mobile.
 * Senada dengan tombol "Pesan Sekarang" di Hero (`bg-white/10` + blur).
 */
const glass =
  "border border-white/15 bg-white/10 shadow-lg shadow-black/10 backdrop-blur-md"

/**
 * Warna tombol menu di atas kaca. Menimpa warna hover bawaan varian `ghost`
 * (abu-abu muda) agar tetap transparan dan teksnya tetap putih.
 */
const itemColors =
  "text-white/80 hover:bg-white/10 hover:text-white dark:hover:bg-white/10"

/**
 * Satu item menu: `<Link>` ke halaman tujuan dengan tampilan tombol `ghost`
 * dari `buttonVariants`.
 *
 * @param onNavigate - Dipanggil saat link berpindah halaman (dipakai menu
 *   mobile untuk menutup panelnya).
 */
function NavItem({
  label,
  href,
  className,
  onNavigate,
}: {
  label: string
  href: string
  className?: string
  onNavigate?: () => void
}) {
  return (
    <Link
      href={href}
      onNavigate={onNavigate}
      className={cn(buttonVariants({ variant: "ghost", className }))}
    >
      {label}
    </Link>
  )
}

/**
 * Komponen Navbar.
 *
 * Menerima semua props bawaan elemen `<header>`; `className` dari luar
 * digabung dengan class default melalui `cn()`.
 */
export function Navbar({ className, ...props }: ComponentProps<"header">) {
  /** `true` saat panel menu mobile sedang terbuka. */
  const [open, setOpen] = useState(false)

  return (
    <header
      className={cn(
        // `fixed` + `z-40`: menempel di atas saat di-scroll, tetapi masih di
        // bawah tombol WhatsApp (`z-50`). `pointer-events-none` agar area
        // kosong di sekitar pil tidak menghalangi klik ke konten di bawahnya;
        // bilah & panel mengaktifkannya kembali dengan `pointer-events-auto`.
        "pointer-events-none fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-6",
        className
      )}
      {...props}
    >
      <nav aria-label="Navigasi utama" className="mx-auto max-w-5xl">
        <div
          className={cn(
            glass,
            "pointer-events-auto flex h-14 items-center justify-between rounded-full pr-2 pl-5"
          )}
        >
          {/* Logo teks: kembali ke beranda. Ikut menutup menu mobile bila
              sedang terbuka. */}
          <Link
            href="/"
            onNavigate={() => setOpen(false)}
            className="rounded-full font-heading text-lg font-bold tracking-tight text-white outline-none focus-visible:ring-3 focus-visible:ring-white/50"
          >
            Mia Printing
          </Link>

          {/* Menu desktop: tampil sejajar mulai breakpoint `md`. */}
          <ul className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <NavItem
                  {...item}
                  className={cn("h-10 rounded-full px-4 text-sm", itemColors)}
                />
              </li>
            ))}
          </ul>

          {/* Tombol hamburger: hanya di mobile. `aria-expanded:*` menimpa
              warna bawaan varian `ghost` saat menu terbuka. */}
          <Button
            variant="ghost"
            size="icon-lg"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((value) => !value)}
            className="size-10 rounded-full text-white hover:bg-white/10 hover:text-white aria-expanded:bg-white/10 aria-expanded:text-white md:hidden dark:hover:bg-white/10"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>

        {/* Panel menu mobile: muncul di bawah bilah saat hamburger ditekan,
            dengan animasi fade + geser dari tw-animate-css. */}
        <ul
          id="menu-mobile"
          className={cn(
            glass,
            "pointer-events-auto mt-2 flex-col gap-1 rounded-3xl p-2 animate-in duration-200 fade-in slide-in-from-top-2 motion-reduce:animate-none md:hidden",
            open ? "flex" : "hidden"
          )}
        >
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <NavItem
                {...item}
                className={cn(
                  "h-11 w-full justify-start rounded-2xl px-4 text-base",
                  itemColors
                )}
                // Navbar ada di root layout sehingga state-nya bertahan
                // antarhalaman; tutup panel setelah pindah halaman.
                onNavigate={() => setOpen(false)}
              />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
