/**
 * Kumpulan fungsi utilitas yang dipakai bersama di seluruh aplikasi.
 *
 * `cn()` menggabungkan beberapa class name menjadi satu string dan
 * menyelesaikan konflik class Tailwind (class yang ditulis belakangan menang).
 * Menerima string, array, objek kondisional, maupun nilai falsy.
 *
 * Fungsi ini berasal dari paket `cn` (pengganti `clsx` + `tailwind-merge`)
 * dan di-export ulang di sini supaya komponen cukup meng-import dari
 * `@/lib/utils` — sesuai alias `utils` di `components.json`.
 *
 * @example
 * cn("px-2 text-sm", isActive && "font-bold", "px-4")
 * // → "text-sm font-bold px-4"  (px-2 tertimpa px-4)
 */
export { cn } from "cn"
