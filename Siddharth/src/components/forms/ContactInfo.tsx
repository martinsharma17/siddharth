import { useFormContext } from "react-hook-form"
import { FormStepLayout } from "./FormStepLayout"
import type { AccountOpeningFormData } from "../../types/form"
import { Input } from "../ui/Input"
import { cn } from "../../lib/utils"
import { Smartphone, Mail, MessageSquare } from "lucide-react"

export function ContactInfo() {
    const { register, watch, setValue, formState: { errors } } = useFormContext<AccountOpeningFormData>()

    const preferredMedium = watch("preferredContactMedium")

    const mediums = [
        { id: 'WhatsApp', label: 'WhatsApp', icon: MessageSquare, color: 'text-green-500' },
        { id: 'Viber', label: 'Viber', icon: MessageSquare, color: 'text-purple-500' },
        { id: 'Email', label: 'Email', icon: Mail, color: 'text-blue-500' },
        { id: 'SMS', label: 'SMS', icon: Smartphone, color: 'text-gray-500' },
    ]

    return (
        <FormStepLayout
            title="Step 3: Contact Information"
            description="How should we reach you? Please provide active contact details."
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                    label="Mobile Number"
                    placeholder="98XXXXXXXX"
                    {...register("mobileNumber", {
                        required: "Mobile number is required",
                        pattern: { value: /^[0-9]{10}$/, message: "Invalid mobile number" }
                    })}
                    error={errors.mobileNumber?.message}
                />

                <Input
                    label="Email Address"
                    placeholder="name@example.com"
                    type="email"
                    {...register("email", {
                        required: "Email is required",
                        pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                    })}
                    error={errors.email?.message}
                />
            </div>

            <div className="space-y-4 pt-4">
                <div className="flex items-center gap-2 ml-1">
                    <MessageSquare className="w-4 h-4 text-[#f2ae1b]" />
                    <label className="text-sm font-bold text-gray-800">Preferred Contact Medium</label>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {mediums.map((item) => {
                        const Icon = item.icon
                        const isSelected = preferredMedium === item.id

                        return (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => setValue("preferredContactMedium", item.id as any)}
                                className={cn(
                                    "flex flex-col items-center gap-3 p-5 rounded-2xl border-2 transition-all",
                                    isSelected
                                        ? "border-[#f2ae1b] bg-[#f2ae1b]/5 ring-1 ring-[#f2ae1b]"
                                        : "border-gray-50 hover:border-gray-100 bg-gray-50/30"
                                )}
                            >
                                <div className={cn(
                                    "p-2 rounded-lg transition-colors",
                                    isSelected ? "text-[#f2ae1b]" : "text-gray-400"
                                )}>
                                    <Icon className="w-6 h-6" />
                                </div>
                                <span className={cn(
                                    "text-xs font-black uppercase tracking-wider",
                                    isSelected ? "text-black" : "text-gray-400"
                                )}>{item.label}</span>
                            </button>
                        )
                    })}
                </div>
            </div>
        </FormStepLayout>
    )
}
