import { useFormContext } from "react-hook-form"
import { FormStepLayout } from "./FormStepLayout"
import type { AccountOpeningFormData } from "../../types/form"
import { Input } from "../ui/Input"
import { cn } from "../../lib/utils"

export function Identification() {
    const { register, formState: { errors } } = useFormContext<AccountOpeningFormData>()

    const districts = ['Kathmandu', 'Lalitpur', 'Bhaktapur', 'Kaski', 'Chitwan', 'Morang'] // Simplified for demo

    return (
        <FormStepLayout
            title="Step 4: Identification Details"
            description="Verify your identity for compliance and security."
        >
            <Input
                label="National ID / Citizenship Number"
                placeholder="Enter your ID number"
                {...register("idNumber", { required: "ID number is required" })}
                error={errors.idNumber?.message}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="space-y-1.5 font-medium">
                    <label className="text-sm font-bold text-gray-800 ml-1">Issued District</label>
                    <select
                        {...register("issuedDistrict", { required: "District is required" })}
                        className={cn(
                            "flex h-12 w-full rounded-xl border border-gray-200 bg-white px-4 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f2ae1b] transition-all",
                            errors.issuedDistrict && "border-red-500"
                        )}
                    >
                        <option value="">Select District</option>
                        {districts.map(d => <option key={d} value={d}>{d}</option>)}
                    </select>
                    {errors.issuedDistrict && <p className="text-xs font-medium text-red-500 ml-1">{errors.issuedDistrict.message}</p>}
                </div>

                <Input
                    label="Issue Date"
                    type="date"
                    {...register("issueDate", { required: "Issue date is required" })}
                    error={errors.issueDate?.message}
                />
            </div>

            <div className="p-5 bg-yellow-50 rounded-2xl border border-yellow-100 mt-4">
                <p className="text-xs text-yellow-800 font-bold leading-relaxed">
                    * Please ensure that you upload clear copies of these documents in the next phase if required. Original documents may be requested during branch verification.
                </p>
            </div>
        </FormStepLayout>
    )
}
