import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const liquidbuttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-[#e34234]/50",
  {
    variants: {
      variant: {
        default: "bg-[#1c1c1c] text-white border-2 border-[#1c1c1c] shadow-[4px_4px_0px_rgba(28,28,28,1)] hover:bg-[#e34234] hover:border-[#e34234] hover:shadow-[4px_4px_0px_rgba(227,66,52,1)] active:shadow-none active:translate-y-1 active:translate-x-1",
        destructive: "bg-destructive text-white hover:bg-destructive/90",
        outline: "bg-white text-[#1c1c1c] border-2 border-[#1c1c1c] shadow-[4px_4px_0px_rgba(28,28,28,1)] hover:bg-[#1c1c1c] hover:text-white active:shadow-none active:translate-y-1 active:translate-x-1",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-[#f5f5f7] hover:text-[#1c1c1c]",
        link: "text-[#e34234] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 text-xs gap-1.5 px-4 has-[>svg]:px-4",
        lg: "h-10 px-6 has-[>svg]:px-4",
        xl: "h-12 px-8 has-[>svg]:px-6",
        xxl: "h-14 px-10 has-[>svg]:px-8",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function LiquidButton({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof liquidbuttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(liquidbuttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </Comp>
  )
}

export { LiquidButton }
