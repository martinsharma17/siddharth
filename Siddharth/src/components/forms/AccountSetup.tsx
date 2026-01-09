import { useFormContext } from "react-hook-form"
import { FormStepLayout } from "./FormStepLayout"
import type { AccountOpeningFormData } from "../../types/form"
import { cn } from "../../lib/utils"
import { User, Users, ShieldCheck } from "lucide-react"

export function AccountSetup() {
    const { watch, setValue } = useFormContext<AccountOpeningFormData>()

    const accountType = watch("accountType")
    const isExistingCustomer = watch("isExistingCustomer")

    const radioCards = [
        {
            id: 'Individual',
            label: 'Individual',
            icon: User,
            desc: 'Standard personal account',
            field: 'accountType'
        },
        {
            id: 'Minor',
            label: 'Minor',
            icon: Users,
            desc: 'Account for children under 18',
            field: 'accountType'
        }
    ]

    return (
        <FormStepLayout
            title="Step 1: Account Setup"
            description="Select your preferred product and account type."
        >
            <div className="mb-4">
                <label className="form-label small fw-bold text-uppercase text-dark mb-3">Account Type</label>
                <div className="row g-3">
                    {radioCards.map((card) => {
                        const Icon = card.icon
                        const isSelected = accountType === card.id

                        return (
                            <div key={card.id} className="col-12 col-md-6">
                                <button
                                    type="button"
                                    onClick={() => setValue("accountType", card.id as any)}
                                    className={cn(
                                        "w-100 d-flex align-items-start gap-3 p-4 rounded-3 border-2 text-start transition-all",
                                        isSelected
                                            ? "border-warning bg-warning bg-opacity-10"
                                            : "border-light bg-light bg-opacity-25"
                                    )}
                                    style={{ borderStyle: 'solid' }}
                                >
                                    <div className={cn(
                                        "p-2 rounded-3",
                                        isSelected ? "bg-warning text-dark" : "bg-light text-muted"
                                    )}>
                                        <Icon size={20} />
                                    </div>
                                    <div>
                                        <h4 className="fw-bold fs-6 text-dark text-uppercase mb-1">{card.label}</h4>
                                        <p className="small text-secondary mb-0" style={{ fontSize: '11px' }}>{card.desc}</p>
                                    </div>
                                </button>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="pt-2">
                <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between p-4 bg-light bg-opacity-50 rounded-3 border border-light gap-4">
                    <div className="d-flex align-items-center gap-3">
                        <div className="p-2 bg-white rounded-3 shadow-sm d-flex">
                            <ShieldCheck size={18} className="text-warning" />
                        </div>
                        <div>
                            <p className="small fw-bold text-dark text-uppercase mb-0">Existing Customer?</p>
                            <p className="small text-secondary mb-0" style={{ fontSize: '11px' }}>Already have an account with Siddhartha Bank?</p>
                        </div>
                    </div>
                    <div className="d-flex bg-white p-1 rounded-3 border border-light shadow-sm">
                        <button
                            type="button"
                            onClick={() => setValue("isExistingCustomer", true)}
                            className={cn(
                                "px-4 py-2 small fw-bold rounded-2 transition-all text-uppercase",
                                isExistingCustomer ? "bg-warning text-dark" : "text-muted"
                            )}
                            style={{ fontSize: '11px', border: 'none' }}
                        >
                            YES
                        </button>
                        <button
                            type="button"
                            onClick={() => setValue("isExistingCustomer", false)}
                            className={cn(
                                "px-4 py-2 small fw-bold rounded-2 transition-all text-uppercase",
                                !isExistingCustomer ? "bg-warning text-dark" : "text-muted"
                            )}
                            style={{ fontSize: '11px', border: 'none' }}
                        >
                            NO
                        </button>
                    </div>
                </div>
            </div>
        </FormStepLayout>

    )
}
