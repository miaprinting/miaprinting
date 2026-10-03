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
      <h1 className="font-heading text-5xl font-bold tracking-tight text-white sm:text-7xl">
        Mia Printing
      </h1>
    </section>
  )
}
