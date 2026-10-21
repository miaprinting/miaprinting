/**
 * Daftar halaman utama situs beserta alamatnya, urut dari kiri ke kanan.
 *
 * Dipakai bersama oleh Navbar dan Footer, jadi menambah atau mengganti
 * halaman cukup dilakukan di sini.
 */
export const NAV_ITEMS: { label: string; href: string }[] = [
  { label: "Beranda", href: "/" },
  { label: "Tentang", href: "/tentang" },
  { label: "Portofolio", href: "/portofolio" },
  { label: "Layanan", href: "/layanan" },
  { label: "Kontak", href: "/kontak" },
]
