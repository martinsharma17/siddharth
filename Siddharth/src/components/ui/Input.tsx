import * as React from "react"
import { cn } from "../../lib/utils"

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, label, error, ...props }, ref) => {
        return (
            <div className="w-100 mb-3">
                {label && (
                    <label className="form-label small fw-bold text-uppercase text-secondary mb-1">
                        {label}
                    </label>
                )}
                <input
                    type={type}
                    className={cn(
                        "form-control rounded-3 py-2",
                        error && "is-invalid",
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                {error && (
                    <div className="invalid-feedback small fw-medium mt-1">
                        {error}
                    </div>
                )}
            </div>

        )
    }
)
Input.displayName = "Input"

export { Input }
