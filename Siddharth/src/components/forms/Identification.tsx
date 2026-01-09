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
            <div className="mb-4">
                <Input
                    label="National ID / Citizenship Number"
                    placeholder="Enter your ID number"
                    {...register("idNumber", { required: "ID number is required" })}
                    error={errors.idNumber?.message}
                />
            </div>

            <div className="row g-4 mb-4">
                <div className="col-12 col-md-6">
                    <label className="form-label small fw-bold text-uppercase text-secondary mb-1">Issued District</label>
                    <select
                        {...register("issuedDistrict", { required: "District is required" })}
                        className={cn(
                            "form-select rounded-3 py-2",
                            errors.issuedDistrict && "is-invalid"
                        )}
                    >
                        <option value="">Select District</option>
                        {districts.map(d => <option key={d} value={d}>{d}</option>)}
                    </select>
                    {errors.issuedDistrict && <div className="invalid-feedback small">{errors.issuedDistrict.message}</div>}
                </div>

                <div className="col-12 col-md-6">
                    <Input
                        label="Issue Date"
                        type="date"
                        {...register("issueDate", { required: "Issue date is required" })}
                        error={errors.issueDate?.message}
                    />
                </div>
            </div>

            <div className="p-4 bg-warning bg-opacity-10 rounded-3 border border-warning border-opacity-25 mt-4">
                <p className="small text-dark fw-medium mb-0" style={{ fontSize: '12px' }}>
                    * Please ensure that you upload clear copies of these documents in the next phase if required. Original documents may be requested during branch verification.
                </p>
            </div>
        </FormStepLayout>

    )
}
