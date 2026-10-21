/**
 * Footer — bagian paling bawah di setiap halaman.
 *
 * Berlatar gelap dengan dua cahaya warna samar di belakang kartu kaca
 * (glassmorphism), senada dengan Navbar. Isinya: brand, navigasi, lini
 * layanan, kontak, dan hak cipta.
 */
import type { ComponentProps } from "react"
import Link from "next/link"
import { Clock, Mail, MapPin, Phone } from "lucide-react"

import { NAV_ITEMS } from "@/lib/navigation"
import { cn } from "@/lib/utils"

/** Empat lini layanan; semuanya mengarah ke halaman Layanan. */
const SERVICES = ["Digital Printing", "Offset", "Sablon", "Reklame"]

/**
 * Data kontak yang tampil di kolom Kontak.
 *
 * TODO: masih placeholder — isi `value` dengan alamat, nomor WhatsApp,
 * email, dan jam buka Mia Printing yang sebenarnya.
 */
const CONTACTS = [
  { icon: MapPin, label: "Alamat", value: "Alamat belum diisi" },
  { icon: Phone, label: "WhatsApp", value: "Nomor WhatsApp belum diisi" },
  { icon: Mail, label: "Email", value: "Email belum diisi" },
  { icon: Clock, label: "Jam buka", value: "Jam buka belum diisi" },
]

/** Gaya link di footer: abu-abu, menjadi putih saat di-hover. */
const linkClass =
  "rounded-sm text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"

/**
 * Komponen Footer.
 *
 * Menerima semua props bawaan elemen `<footer>`; `className` dari luar
 * digabung dengan class default melalui `cn()`.
 */
export function Footer({ className, ...props }: ComponentProps<"footer">) {
  // Dihitung saat halaman dirender (saat build untuk halaman statis).
  const year = new Date().getFullYear()

  return (
    <footer
      className={cn(
        // `dark`: memakai token warna mode gelap, sehingga footer tampil
        // sama di halaman terang maupun gelap. `isolate` + `overflow-hidden`
        // menahan cahaya dekoratif tetap di dalam footer.
        "dark relative isolate overflow-hidden bg-background text-foreground",
        className
      )}
      {...props}
    >
      {/* Cahaya dekoratif (cyan & magenta, warna tinta cetak) yang tampak
          samar di balik kartu kaca. */}
      <div
        aria-hidden
        className="absolute -top-32 left-[10%] -z-10 size-96 rounded-full bg-cyan-500/15 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute right-[10%] -bottom-40 -z-10 size-96 rounded-full bg-fuchsia-500/15 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        {/* Kartu kaca. */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md sm:p-10">
          {/* Di bawah `lg`: brand & kontak selebar penuh, navigasi & layanan
              berdampingan. Mulai `lg`: 4 kolom sejajar (kolom brand & kontak
              sedikit lebih lebar). */}
          <div className="grid grid-cols-2 gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
            <div className="col-span-2 max-w-xs lg:col-span-1">
              <Link
                href="/"
                className="rounded-sm font-heading text-xl font-bold tracking-tight outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                Mia Printing
              </Link>
              <p className="mt-4 text-sm text-pretty text-muted-foreground">
                Satu tempat untuk semua kebutuhan cetak Anda, untuk perusahaan
                maupun personal.
              </p>
            </div>

            <nav aria-label="Navigasi footer">
              <h2 className="text-sm font-semibold">Navigasi</h2>
              <ul className="mt-4 flex flex-col gap-3 text-sm">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={linkClass}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className="text-sm font-semibold">Layanan</h2>
              <ul className="mt-4 flex flex-col gap-3 text-sm">
                {SERVICES.map((service) => (
                  <li key={service}>
                    <Link href="/layanan" className={linkClass}>
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 lg:col-span-1">
              <h2 className="text-sm font-semibold">Kontak</h2>
              <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
                {CONTACTS.map(({ icon: Icon, label, value }) => (
                  <li key={label} className="flex items-start gap-3">
                    <Icon aria-hidden className="mt-0.5 size-4 shrink-0" />
                    <span>
                      {/* Label hanya untuk screen reader; ikon sudah
                          mewakilinya secara visual. */}
                      <span className="sr-only">{label}: </span>
                      {value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-sm text-muted-foreground">
            <p>© {year} Mia Printing. Hak cipta dilindungi.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
