import * as React from "react"
import { cn } from "../../lib/utils"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        const variants = {
            primary: 'btn btn-warning fw-bold text-uppercase shadow-sm py-2 px-4',
            secondary: 'btn btn-dark fw-bold text-uppercase shadow-sm py-2 px-4',
            outline: 'btn btn-outline-secondary fw-bold py-2 px-4',
            ghost: 'btn btn-link text-secondary text-decoration-none fw-bold text-uppercase py-2 px-4',
        }

        const sizes = {
            sm: 'btn-sm',
            md: '',
            lg: 'btn-lg',
        }

        return (
            <button
                ref={ref}
                className={cn(
                    "rounded-pill transition-all",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            />
        )

    }
)
Button.displayName = "Button"

export { Button }
