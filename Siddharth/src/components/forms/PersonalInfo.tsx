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
            <div className="row g-3 mb-4">
                <div className="col-12 col-md-3">
                    <label className="form-label small fw-bold text-uppercase text-secondary mb-1">Salutation</label>
                    <select
                        {...register("salutation" as any, { required: "Required" })}
                        className="form-select rounded-3 py-2"
                    >
                        <option value="Mr">Mr.</option>
                        <option value="Mrs">Mrs.</option>
                        <option value="Ms">Ms.</option>
                        <option value="Miss">Miss</option>
                    </select>
                </div>
                <div className="col-12 col-md-3">
                    <Input
                        label="First Name"
                        placeholder="First Name"
                        {...register("firstName" as any, { required: "Required" })}
                        error={(errors as any).firstName?.message}
                    />
                </div>
                <div className="col-12 col-md-3">
                    <Input
                        label="Middle Name"
                        placeholder="Middle Name"
                        {...register("middleName" as any)}
                    />
                </div>
                <div className="col-12 col-md-3">
                    <Input
                        label="Last Name"
                        placeholder="Last Name"
                        {...register("lastName" as any, { required: "Required" })}
                        error={(errors as any).lastName?.message}
                    />
                </div>
            </div>

            <div className="row g-4 mb-4">
                <div className="col-12 col-md-6">
                    <div className="d-flex align-items-center justify-content-between mb-1">
                        <label className="form-label small fw-bold text-uppercase text-secondary mb-0">Date of Birth</label>
                        <div className="d-flex bg-light p-1 rounded-2">
                            <button
                                type="button"
                                onClick={() => setValue("dateOfBirthType", "AD")}
                                className={cn(
                                    "px-3 py-1 small fw-bold rounded-1 transition-all",
                                    dateOfBirthType === "AD" ? "bg-white shadow-sm text-primary" : "text-muted"
                                )}
                                style={{ fontSize: '10px', border: 'none' }}
                            >
                                A.D
                            </button>
                            <button
                                type="button"
                                onClick={() => setValue("dateOfBirthType", "BS")}
                                className={cn(
                                    "px-3 py-1 small fw-bold rounded-1 transition-all",
                                    dateOfBirthType === "BS" ? "bg-white shadow-sm text-primary" : "text-muted"
                                )}
                                style={{ fontSize: '10px', border: 'none' }}
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

                <div className="col-12 col-md-6">
                    <label className="form-label small fw-bold text-uppercase text-secondary mb-1">Nationality</label>
                    <select
                        {...register("nationality", { required: "Nationality is required" })}
                        className={cn(
                            "form-select rounded-3 py-2",
                            errors.nationality && "is-invalid"
                        )}
                    >
                        <option value="Nepalese">Nepalese</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>

            <div className="pt-2">
                <div className="form-check d-flex align-items-center gap-2">
                    <input
                        type="checkbox"
                        id="isNRN"
                        {...register("isNRN")}
                        className="form-check-input"
                    />
                    <label htmlFor="isNRN" className="form-check-label small fw-medium text-dark">
                        I am a Non-Resident Nepalese (NRN)
                    </label>
                </div>

                {watch("isNRN") && (
                    <div className="mt-3">
                        <Input
                            label="NRN Card Number"
                            placeholder="Enter your NRN number"
                            {...register("nrnNumber", { required: "NRN number is required if checked" })}
                            error={errors.nrnNumber?.message}
                        />
                    </div>
                )}
            </div>
        </FormStepLayout>

    )
}
