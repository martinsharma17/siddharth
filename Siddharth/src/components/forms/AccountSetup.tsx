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
            <div className="space-y-4">
                <label className="text-[13px] font-black text-gray-800 uppercase tracking-wide ml-0.5">Account Type</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {radioCards.map((card) => {
                        const Icon = card.icon
                        const isSelected = accountType === card.id

                        return (
                            <button
                                key={card.id}
                                type="button"
                                onClick={() => setValue("accountType", card.id as any)}
                                className={cn(
                                    "flex items-start gap-3 p-4 rounded-xl border-2 text-left transition-all",
                                    isSelected
                                        ? "border-[#f2ae1b] bg-[#f2ae1b]/5 ring-1 ring-[#f2ae1b]"
                                        : "border-gray-50 hover:border-gray-100 bg-gray-50/20"
                                )}
                            >
                                <div className={cn(
                                    "p-2.5 rounded-lg",
                                    isSelected ? "bg-[#f2ae1b] text-white" : "bg-gray-100 text-gray-400"
                                )}>
                                    <Icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-extrabold text-sm text-[#1a1a1a] uppercase tracking-tight">{card.label}</h4>
                                    <p className="text-[11px] text-gray-500 leading-tight font-medium mt-0.5">{card.desc}</p>
                                </div>
                            </button>
                        )
                    })}
                </div>
            </div>

            <div className="space-y-4 pt-2">
                <div className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-gray-50/50 rounded-xl border border-gray-100 gap-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-white rounded-lg shadow-sm">
                            <ShieldCheck className="w-4 h-4 text-[#f2ae1b]" />
                        </div>
                        <div>
                            <p className="text-sm font-extrabold text-[#1a1a1a] uppercase tracking-tight leading-none">Existing Customer?</p>
                            <p className="text-[11px] text-gray-500 font-medium mt-1">Already have an account with Siddhartha Bank?</p>
                        </div>
                    </div>
                    <div className="flex bg-white p-1 rounded-lg border border-gray-200 self-start md:self-auto shadow-sm">
                        <button
                            type="button"
                            onClick={() => setValue("isExistingCustomer", true)}
                            className={cn(
                                "px-5 py-2 text-[11px] font-black rounded-md transition-all uppercase tracking-wider",
                                isExistingCustomer ? "bg-[#f2ae1b] text-black shadow-sm" : "text-gray-400 hover:bg-gray-50"
                            )}
                        >
                            YES
                        </button>
                        <button
                            type="button"
                            onClick={() => setValue("isExistingCustomer", false)}
                            className={cn(
                                "px-5 py-2 text-[11px] font-black rounded-md transition-all uppercase tracking-wider",
                                !isExistingCustomer ? "bg-[#f2ae1b] text-black shadow-sm" : "text-gray-400 hover:bg-gray-50"
                            )}
                        >
                            NO
                        </button>
                    </div>
                </div>
            </div>
        </FormStepLayout>
    )
}
