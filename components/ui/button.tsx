/**
 * Komponen Button dasar (dibuat oleh shadcn/ui, style "base-nova").
 *
 * File di folder `components/ui/` dihasilkan oleh CLI shadcn dan menjadi
 * fondasi design system. Ubah dengan hati-hati: perubahan di sini berdampak ke
 * semua tombol di aplikasi. Untuk kustomisasi satu tombol, cukup kirim
 * `className` saat memakainya (lihat `components/hero.tsx`).
 */
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

/**
 * Daftar class Tailwind untuk setiap kombinasi `variant` × `size`,
 * didefinisikan dengan `cva` (class-variance-authority).
 *
 * Bisa juga dipakai langsung untuk memberi tampilan tombol pada elemen lain,
 * misalnya link: `<a className={buttonVariants({ variant: "outline" })}>`.
 *
 * Catatan class dasar:
 * - `group/button` → anak elemen bisa bereaksi saat tombol di-hover lewat
 *   `group-hover/button:*` (dipakai untuk animasi ikon panah di Hero).
 * - `has-data-[icon=inline-start|inline-end]` → padding kiri/kanan dikurangi
 *   bila tombol berisi ikon yang diberi atribut `data-icon`.
 * - `aria-invalid:*` → tampilan merah otomatis saat dipakai di form yang tidak valid.
 * - `[&_svg:not([class*='size-'])]:size-4` → ikon SVG di dalam tombol
 *   berukuran default 16px kecuali diberi class `size-*` sendiri.
 */
const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      /** Gaya visual tombol. */
      variant: {
        /** Tombol utama: latar warna `primary`. */
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        /** Tombol berbingkai dengan latar netral. */
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        /** Tombol pendamping dengan latar `secondary` yang lebih kalem. */
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        /** Tanpa latar; latar baru muncul saat hover. */
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        /** Untuk aksi berbahaya (mis. hapus), bernuansa merah. */
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        /** Tampil seperti tautan teks bergaris bawah. */
        link: "text-primary underline-offset-4 hover:underline",
      },
      /**
       * Ukuran tombol. `xs`/`sm`/`default`/`lg` untuk tombol berteks;
       * `icon*` untuk tombol persegi yang hanya berisi ikon.
       */
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

/**
 * Tombol serbaguna berbasis `Button` dari Base UI (menangani aksesibilitas,
 * keyboard, dan state disabled), dibalut dengan styling `buttonVariants`.
 *
 * @param variant - Gaya visual: `default` | `outline` | `secondary` | `ghost` | `destructive` | `link`.
 * @param size - Ukuran: `default` | `xs` | `sm` | `lg` | `icon` | `icon-xs` | `icon-sm` | `icon-lg`.
 * @param className - Class tambahan; digabung lewat `cn()` sehingga dapat menimpa class bawaan.
 *
 * @example
 * <Button variant="outline" size="sm">Batal</Button>
 *
 * @example
 * // Tombol dengan ikon di kanan
 * <Button>
 *   Lanjut <ArrowRight data-icon="inline-end" />
 * </Button>
 */
function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      // `data-slot` menandai elemen ini sebagai tombol, dipakai oleh selector
      // CSS komponen shadcn lain (mis. `in-data-[slot=button-group]`).
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
