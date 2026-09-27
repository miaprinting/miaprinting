import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

export function Hero({ className, ...props }: ComponentProps<"section">) {
  return (
    <section
      className={cn(
        "flex w-full flex-col items-center justify-center px-4 py-24 text-center sm:py-32",
        className
      )}
      {...props}
    >
      <h1 className="font-heading text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
        Mia Printing
      </h1>
    </section>
  )
}
