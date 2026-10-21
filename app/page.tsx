/**
 * Halaman beranda (route `/`).
 *
 * Saat ini halaman hanya berisi section Hero. Section lain (layanan, galeri,
 * kontak, dll.) cukup ditambahkan sebagai komponen di dalam `<main>`.
 */
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    // `flex-1` membuat <main> mengisi sisa tinggi <body> (lihat app/layout.tsx).
    <main className="flex flex-1 flex-col">
      <Hero />
    </main>
  );
  //test
}
