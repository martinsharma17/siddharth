import { useFormContext } from "react-hook-form"
import { FormStepLayout } from "./FormStepLayout"
import type { AccountOpeningFormData } from "../../types/form"
import { CheckCircle2 } from "lucide-react"

export function ReviewSubmit() {
    const { getValues } = useFormContext<AccountOpeningFormData>()
    const data = getValues()

    const sections = [
        {
            title: 'Account Information',
            items: [
                { label: 'Account Type', value: data.accountType },
                { label: 'Existing Customer', value: data.isExistingCustomer ? 'Yes' : 'No' },
            ]
        },
        {
            title: 'Personal Details',
            items: [
                { label: 'Full Name', value: `${data.salutation} ${data.firstName} ${data.middleName || ''} ${data.lastName}` },
                { label: 'DOB', value: `${data.dateOfBirth} (${data.dateOfBirthType})` },
                { label: 'Nationality', value: data.nationality },
            ]
        },
        {
            title: 'Contact Information',
            items: [
                { label: 'Mobile', value: data.mobileNumber },
                { label: 'Email', value: data.email },
                { label: 'Preferred', value: data.preferredContactMedium },
            ]
        }
    ]

    return (
        <FormStepLayout
            title="Step 5: Review & Submit"
            description="Please verify your details before final submission."
        >
            <div className="space-y-6">
                {sections.map((section) => (
                    <div key={section.title} className="p-6 bg-gray-50/50 rounded-2xl border border-gray-100 space-y-4">
                        <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest border-b border-gray-200 pb-2">{section.title}</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {section.items.map(item => (
                                <div key={item.label}>
                                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tight">{item.label}</p>
                                    <p className="text-sm font-extrabold text-[#1a1a1a]">{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                <div className="flex gap-4 items-start p-6 bg-green-50 rounded-[1.5rem] border border-green-100">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                    </div>
                    <p className="text-xs text-green-800 font-bold leading-relaxed">
                        I hereby declare that the information provided above is true and correct. I authorize Siddhartha Bank to verify any information provided. I have read and agree to the Bank's Digital Banking Terms of Service.
                    </p>
                </div>
            </div>
        </FormStepLayout>
    )
}
