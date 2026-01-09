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
            primary: 'bg-[#f2ae1b] text-black hover:bg-[#d99a14] font-black shadow-[0_4px_14px_0_rgba(242,174,27,0.3)] uppercase tracking-wider',
            secondary: 'bg-[#1a1a1a] text-white hover:bg-black font-black shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] uppercase tracking-widest',
            outline: 'border-2 border-gray-100 text-gray-500 hover:border-[#f2ae1b] hover:text-[#f2ae1b] font-bold transition-all',
            ghost: 'text-gray-400 hover:text-black font-black uppercase tracking-widest',
        }

        const sizes = {
            sm: 'px-3 py-1.5 text-[10px]',
            md: 'px-5 py-2.5 text-xs',
            lg: 'px-8 py-3.5 text-sm',
        }

        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-xl transition-all duration-300 active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none group",
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
