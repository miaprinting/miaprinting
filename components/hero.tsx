import type { ComponentProps } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"
import heroBackground from "@/public/hero-background.webp"

export function Hero({ className, ...props }: ComponentProps<"section">) {
  return (
    <section
      className={cn(
        "relative isolate flex w-full flex-col items-center justify-center min-h-svh overflow-hidden px-4 py-24 text-center",
        className
      )}
      {...props}
    >
      <Image
        src={heroBackground}
        alt=""
        fill
        preload
        placeholder="blur"
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-black/55" />
      <h1 className="font-heading max-w-4xl text-4xl font-bold tracking-tight text-balance text-white sm:text-6xl">
        Satu Tempat untuk Semua Kebutuhan Cetak Anda
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-pretty text-white/80 sm:text-xl">
        Digital printing, offset, sablon, hingga reklame untuk perusahaan maupun
        personal, dengan kualitas terbaik dan harga bersaing.
      </p>
    </section>
  )
}
