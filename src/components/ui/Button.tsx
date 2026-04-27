import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-organic text-sm font-semibold tracking-[0.04em] uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default:
          "text-white shadow-soft-md bg-[linear-gradient(135deg,var(--color-brand-500)_0%,var(--color-brand-600)_60%,var(--color-brand-700)_100%)] hover:-translate-y-0.5 hover:shadow-[0_18px_34px_-12px_rgba(122,37,23,0.45)]",
        destructive: "bg-danger-500 text-white hover:bg-danger-600",
        outline:
          "border border-stone-300/80 bg-white/90 backdrop-blur-md hover:bg-brand-50/70 hover:border-brand-100 hover:-translate-y-0.5",
        secondary: "bg-stone-100/90 text-stone-900 hover:bg-stone-200 hover:-translate-y-0.5",
        ghost: "hover:bg-stone-100/90 hover:text-stone-900",
        link: "underline-offset-4 hover:underline text-brand-600",
      },
      size: {
        default: "h-11 py-2 px-5",
        sm: "h-9 px-3",
        lg: "h-12 px-9",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
