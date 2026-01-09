import { useFormContext } from "react-hook-form"
import { FormStepLayout } from "./FormStepLayout"
import type { AccountOpeningFormData } from "../../types/form"
import { Input } from "../ui/Input"
import { cn } from "../../lib/utils"

export function PersonalInfo() {
    const { register, watch, setValue, formState: { errors } } = useFormContext<AccountOpeningFormData>()

    const dateOfBirthType = watch("dateOfBirthType")

    return (
        <FormStepLayout
            title="Step 2: Personal Details"
            description="Please enter your personal information exactly as it appears on your ID."
        >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-1 space-y-1.5">
                    <label className="text-sm font-bold text-gray-700 ml-1">Salutation</label>
                    <select
                        {...register("salutation" as any, { required: "Required" })}
                        className="flex h-12 w-full rounded-xl border border-gray-200 bg-white px-4 py-2 text-base focus:ring-2 focus:ring-[#f2ae1b] outline-none transition-all"
                    >
                        <option value="Mr">Mr.</option>
                        <option value="Mrs">Mrs.</option>
                        <option value="Ms">Ms.</option>
                        <option value="Miss">Miss</option>
                    </select>
                </div>
                <div className="md:col-span-1">
                    <Input
                        label="First Name"
                        placeholder="First Name"
                        {...register("firstName" as any, { required: "Required" })}
                        error={(errors as any).firstName?.message}
                    />
                </div>
                <div className="md:col-span-1">
                    <Input
                        label="Middle Name"
                        placeholder="Middle Name"
                        {...register("middleName" as any)}
                    />
                </div>
                <div className="md:col-span-1">
                    <Input
                        label="Last Name"
                        placeholder="Last Name"
                        {...register("lastName" as any, { required: "Required" })}
                        error={(errors as any).lastName?.message}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                        <label className="text-sm font-medium text-gray-700 ml-1">Date of Birth</label>
                        <div className="flex bg-gray-100 p-1 rounded-lg scale-90 origin-right">
                            <button
                                type="button"
                                onClick={() => setValue("dateOfBirthType", "AD")}
                                className={cn(
                                    "px-3 py-1 text-[10px] font-bold rounded-md transition-all",
                                    dateOfBirthType === "AD" ? "bg-white shadow-sm text-[#0B3C5D]" : "text-gray-500"
                                )}
                            >
                                A.D
                            </button>
                            <button
                                type="button"
                                onClick={() => setValue("dateOfBirthType", "BS")}
                                className={cn(
                                    "px-3 py-1 text-[10px] font-bold rounded-md transition-all",
                                    dateOfBirthType === "BS" ? "bg-white shadow-sm text-[#0B3C5D]" : "text-gray-500"
                                )}
                            >
                                B.S
                            </button>
                        </div>
                    </div>
                    <Input
                        type="date"
                        {...register("dateOfBirth", { required: "DOB is required" })}
                        error={errors.dateOfBirth?.message}
                    />
                </div>

                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-gray-700 ml-1">Nationality</label>
                    <select
                        {...register("nationality", { required: "Nationality is required" })}
                        className={cn(
                            "flex h-12 w-full rounded-xl border border-gray-200 bg-white px-4 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B3C5D]",
                            errors.nationality && "border-red-500"
                        )}
                    >
                        <option value="Nepalese">Nepalese</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>

            <div className="pt-4 space-y-4">
                <div className="flex items-center gap-3">
                    <input
                        type="checkbox"
                        id="isNRN"
                        {...register("isNRN")}
                        className="w-5 h-5 rounded border-gray-300 text-[#1ABC9C] focus:ring-[#1ABC9C]"
                    />
                    <label htmlFor="isNRN" className="text-sm font-medium text-gray-700">
                        I am a Non-Resident Nepalese (NRN)
                    </label>
                </div>

                {watch("isNRN") && (
                    <Input
                        label="NRN Card Number"
                        placeholder="Enter your NRN number"
                        {...register("nrnNumber", { required: "NRN number is required if checked" })}
                        error={errors.nrnNumber?.message}
                    />
                )}
            </div>
        </FormStepLayout>
    )
}
