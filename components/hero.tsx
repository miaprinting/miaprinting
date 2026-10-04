import type { ComponentProps } from "react"
import Image from "next/image"
import { ArrowDown, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
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
      <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
        <Button className="h-12 rounded-full border-white/15 bg-white/10 px-6 text-base text-white backdrop-blur-sm hover:bg-white/20 has-data-[icon=inline-end]:pr-5">
          Pesan Sekarang
          <ArrowRight
            data-icon="inline-end"
            className="transition-transform group-hover/button:translate-x-0.5"
          />
        </Button>
        <Button
          variant="ghost"
          className="h-12 rounded-full px-6 text-base text-white hover:bg-white/10 hover:text-white has-data-[icon=inline-end]:pr-5 dark:hover:bg-white/10"
        >
          Lihat Layanan
          <ArrowDown
            data-icon="inline-end"
            className="transition-transform group-hover/button:translate-y-0.5"
          />
        </Button>
      </div>
    </section>
  )
}
