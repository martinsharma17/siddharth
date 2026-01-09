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
            <div className="row g-4 mb-4">
                <div className="col-12 col-md-6">
                    <Input
                        label="Mobile Number"
                        placeholder="98XXXXXXXX"
                        {...register("mobileNumber", {
                            required: "Mobile number is required",
                            pattern: { value: /^[0-9]{10}$/, message: "Invalid mobile number" }
                        })}
                        error={errors.mobileNumber?.message}
                    />
                </div>

                <div className="col-12 col-md-6">
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
            </div>

            <div className="pt-2">
                <div className="d-flex align-items-center gap-2 mb-3">
                    <MessageSquare size={16} className="text-warning" />
                    <label className="small fw-bold text-uppercase text-dark mb-0">Preferred Contact Medium</label>
                </div>
                <div className="row row-cols-2 row-cols-md-4 g-3">
                    {mediums.map((item) => {
                        const Icon = item.icon
                        const isSelected = preferredMedium === item.id

                        return (
                            <div key={item.id} className="col">
                                <button
                                    type="button"
                                    onClick={() => setValue("preferredContactMedium", item.id as any)}
                                    className={cn(
                                        "w-100 d-flex flex-column align-items-center gap-2 p-4 rounded-3 border border-2 transition-all",
                                        isSelected
                                            ? "border-warning bg-warning bg-opacity-10"
                                            : "border-light bg-light bg-opacity-25"
                                    )}
                                    style={{ borderStyle: 'solid' }}
                                >
                                    <div className={cn(
                                        "p-1 rounded-2",
                                        isSelected ? "text-warning" : "text-muted"
                                    )}>
                                        <Icon size={24} />
                                    </div>
                                    <span className={cn(
                                        "small fw-bold text-uppercase",
                                        isSelected ? "text-dark" : "text-muted"
                                    )} style={{ fontSize: '10px' }}>{item.label}</span>
                                </button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </FormStepLayout>

    )
}
