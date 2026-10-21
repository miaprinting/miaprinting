/**
 * Halaman Tentang (route `/tentang`).
 *
 * TODO: masih berisi halaman sementara — ganti dengan profil Mia Printing.
 */
import type { Metadata } from "next"

import { ComingSoon } from "@/components/coming-soon"

export const metadata: Metadata = {
  title: "Tentang | Mia Printing",
}

export default function TentangPage() {
  return <ComingSoon eyebrow="Tentang" title="Tentang Mia Printing" />
}
