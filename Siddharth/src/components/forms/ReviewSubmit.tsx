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
            <div className="d-flex flex-column gap-4">
                {sections.map((section) => (
                    <div key={section.title} className="p-4 bg-light bg-opacity-50 rounded-3 border border-light">
                        <h4 className="small fw-bold text-uppercase text-muted border-bottom border-light pb-2 mb-3" style={{ fontSize: '10px', letterSpacing: '0.1em' }}>{section.title}</h4>
                        <div className="row row-cols-2 row-cols-md-3 g-3">
                            {section.items.map(item => (
                                <div key={item.label} className="col">
                                    <p className="small text-secondary fw-bold text-uppercase mb-0" style={{ fontSize: '10px' }}>{item.label}</p>
                                    <p className="small fw-bold text-dark mb-0">{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                <div className="d-flex gap-3 align-items-start p-4 bg-success bg-opacity-10 rounded-4 border border-success border-opacity-25">
                    <div className="p-2 bg-white rounded-3 shadow-sm d-flex">
                        <CheckCircle2 size={20} className="text-success" />
                    </div>
                    <p className="small text-success fw-medium mb-0" style={{ fontSize: '12px' }}>
                        I hereby declare that the information provided above is true and correct. I authorize Siddhartha Bank to verify any information provided. I have read and agree to the Bank's Digital Banking Terms of Service.
                    </p>
                </div>
            </div>
        </FormStepLayout>

    )
}
