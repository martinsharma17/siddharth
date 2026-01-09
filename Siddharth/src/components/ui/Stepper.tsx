import { cn } from "../../lib/utils"
import { Check } from "lucide-react"

interface StepperProps {
    steps: string[]
    currentStep: number
}

export function Stepper({ steps, currentStep }: StepperProps) {
    return (
        <div className="relative flex justify-between w-full max-w-2xl mx-auto px-4">
            {/* Progress Track */}
            <div className="absolute top-5 left-8 right-8 h-[2px] bg-gray-100 -z-10" />

            {/* Active Progress Line */}
            <div
                className="absolute top-5 left-8 h-[2px] bg-gradient-to-r from-[#f2ae1b] to-[#ffc13b] transition-all duration-700 ease-in-out -z-10 shadow-[0_0_10px_rgba(242,174,27,0.3)]"
                style={{ width: `calc(${(currentStep / (steps.length - 1)) * 100}% - 16px)` }}
            />

            {steps.map((step, index) => {
                const isActive = index <= currentStep

                return (
                    <div key={step} className="flex flex-col items-center gap-3">
                        <div
                            className={cn(
                                "w-10 h-10 rounded-2xl flex items-center justify-center border-2 transition-all duration-500 transform",
                                isActive
                                    ? "bg-white border-[#f2ae1b] shadow-[0_0_20px_rgba(242,174,27,0.15)] rotate-0"
                                    : "bg-gray-50 border-gray-100 rotate-45"
                            )}
                        >
                            <div className={cn(
                                "transition-all duration-500",
                                !isActive && "rotate-[-45deg]"
                            )}>
                                {isActive && index < currentStep ? (
                                    <Check className="w-5 h-5 text-[#f2ae1b]" />
                                ) : (
                                    <span className={cn(
                                        "text-xs font-black",
                                        isActive ? "text-[#1a1a1a]" : "text-gray-300"
                                    )}>
                                        {index + 1}
                                    </span>
                                )}
                            </div>
                        </div>
                        <span
                            className={cn(
                                "text-[9px] font-black uppercase tracking-[0.15em] hidden lg:block transition-colors duration-500",
                                isActive ? "text-[#1a1a1a]" : "text-gray-300"
                            )}
                        >
                            {step}
                        </span>
                    </div>
                )
            })}
        </div>
    )
}
