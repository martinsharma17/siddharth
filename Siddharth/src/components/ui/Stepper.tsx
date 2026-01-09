import { cn } from "../../lib/utils"
import { Check } from "lucide-react"

interface StepperProps {
    steps: string[]
    currentStep: number
}

export function Stepper({ steps, currentStep }: StepperProps) {
    return (
        <div className="position-relative d-flex justify-content-between w-100 mx-auto px-4" style={{ maxWidth: '672px' }}>
            {/* Progress Track */}
            <div className="position-absolute bg-light" style={{ top: '20px', left: '32px', right: '32px', height: '2px', zIndex: -1 }} />

            {/* Active Progress Line */}
            <div
                className="position-absolute transition-all"
                style={{
                    top: '20px',
                    left: '32px',
                    height: '2px',
                    background: 'linear-gradient(to right, #f2ae1b, #ffc13b)',
                    transitionDuration: '700ms',
                    zIndex: -1,
                    boxShadow: '0 0 10px rgba(242,174,27,0.3)',
                    width: `calc(${(currentStep / (steps.length - 1)) * 100}% - 16px)`
                }}
            />

            {steps.map((step, index) => {
                const isActive = index <= currentStep

                return (
                    <div key={step} className="d-flex flex-column align-items-center gap-2">
                        <div
                            className={cn(
                                "d-flex align-items-center justify-content-center border border-2 transition-all",
                                isActive
                                    ? "bg-white border-warning shadow-sm"
                                    : "bg-light border-light"
                            )}
                            style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '12px',
                                transitionDuration: '500ms'
                            }}
                        >
                            <div className="transition-all" style={{ transitionDuration: '500ms' }}>
                                {isActive && index < currentStep ? (
                                    <Check size={20} className="text-warning" />
                                ) : (
                                    <span className={cn(
                                        "small fw-bold",
                                        isActive ? "text-dark" : "text-muted"
                                    )}>
                                        {index + 1}
                                    </span>
                                )}
                            </div>
                        </div>
                        <span
                            className={cn(
                                "small fw-bold text-uppercase d-none d-lg-block transition-all",
                                isActive ? "text-dark" : "text-muted"
                            )}
                            style={{ fontSize: '9px', letterSpacing: '0.15em', transitionDuration: '500ms' }}
                        >
                            {step}
                        </span>
                    </div>
                )
            })}
        </div>
    )

}
