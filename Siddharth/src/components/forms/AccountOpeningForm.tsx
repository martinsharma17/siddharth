import { useState } from "react"
import { useForm, FormProvider } from "react-hook-form"
import { AnimatePresence, motion } from "framer-motion"
import { Stepper } from "../ui/Stepper"
import { Button } from "../ui/Button"
import { Header } from "../layout/Header"
import { TrustBadge } from "../ui/TrustBadge"
import { FORM_STEPS } from "../../constants/formSteps"
import { AccountSetup } from "./AccountSetup"
import { PersonalInfo } from "./PersonalInfo"
import { ContactInfo } from "./ContactInfo"
import { Identification } from "./Identification"
import { ReviewSubmit } from "./ReviewSubmit"
import type { AccountOpeningFormData } from "../../types/form"
import { ChevronLeft, ChevronRight, Check } from "lucide-react"
import { cn } from "../../lib/utils"

export function AccountOpeningForm() {
    const [currentStep, setCurrentStep] = useState(0)

    const methods = useForm<AccountOpeningFormData>({
        defaultValues: {
            accountType: 'Individual',
            isExistingCustomer: false,
            dateOfBirthType: 'AD',
            nationality: 'Nepalese',
            isNRN: false,
            preferredContactMedium: 'WhatsApp'
        }
    })

    const { handleSubmit, trigger } = methods

    const handleNext = async () => {
        const fieldsToValidate = getFieldsForStep(currentStep)
        const isValid = await trigger(fieldsToValidate as any)

        if (isValid && currentStep < FORM_STEPS.length - 1) {
            setCurrentStep(prev => prev + 1)
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1)
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    const onSubmit = (data: AccountOpeningFormData) => {
        console.log("Form Submitted:", data)
        alert("Form submitted successfully! Check console for data.")
    }

    const getFieldsForStep = (step: number) => {
        switch (step) {
            case 0: return ["accountType", "isExistingCustomer"]
            case 1: return ["salutation", "firstName", "lastName", "dateOfBirth", "nationality", "nrnNumber"]
            case 2: return ["mobileNumber", "email", "preferredContactMedium"]
            case 3: return ["idNumber", "issuedDistrict", "issueDate"]
            default: return []
        }
    }

    const renderStepContent = (step: number) => {
        switch (step) {
            case 0: return <AccountSetup />
            case 1: return <PersonalInfo />
            case 2: return <ContactInfo />
            case 3: return <Identification />
            case 4: return <ReviewSubmit />
            default: return null
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-gray-50/50 to-yellow-50/20 py-8 md:py-16">
            <div className="max-w-4xl mx-auto px-4">
                <div className="bg-white rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-gray-100/50 overflow-hidden relative">

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-100/30 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-100/20 rounded-full blur-3xl -ml-32 -mb-32"></div>

                    <Header />

                    {/* Content Wrapper */}
                    <div className="relative z-20 -mt-8 mx-3 md:mx-10 mb-8 p-6 md:p-12 bg-white/80 backdrop-blur-md rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-100/30">
                        <Stepper steps={[...FORM_STEPS]} currentStep={currentStep} />

                        <div className="mt-10">
                            <FormProvider {...methods}>
                                <form onSubmit={handleSubmit(onSubmit)} className="min-h-[350px]">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentStep}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {renderStepContent(currentStep)}
                                        </motion.div>
                                    </AnimatePresence>
                                </form>
                            </FormProvider>
                        </div>
                    </div>

                    {/* Footer / Actions */}
                    <div className="px-8 md:px-16 py-8 bg-gray-50/30 border-t border-gray-100/50 flex items-center justify-between gap-4">
                        <Button
                            type="button"
                            variant="ghost"
                            onClick={handleBack}
                            disabled={currentStep === 0}
                            className={cn("gap-2 font-black transition-all text-xs md:text-sm px-0 hover:bg-transparent hover:translate-x-[-4px]", currentStep === 0 && "opacity-0")}
                        >
                            <ChevronLeft className="w-5 h-5" />
                            PREVIOUS
                        </Button>

                        {currentStep === FORM_STEPS.length - 1 ? (
                            <Button
                                onClick={handleSubmit(onSubmit)}
                                variant="secondary"
                                size="lg"
                                className="gap-3 px-8 md:px-14 py-4 rounded-2xl shadow-2xl shadow-black/10 text-xs md:text-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
                            >
                                SUBMIT APPLICATION
                                <Check className="w-5 h-5" />
                            </Button>
                        ) : (
                            <Button
                                type="button"
                                onClick={handleNext}
                                size="lg"
                                className="group gap-3 px-8 md:px-14 py-4 rounded-2xl shadow-xl shadow-yellow-400/20 text-xs md:text-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
                            >
                                NEXT STEP
                                <ChevronRight className="w-5 h-5 text-black/50 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        )}
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-12 flex flex-wrap justify-center gap-10 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                    <TrustBadge label="Secure SSL" />
                    <TrustBadge label="PCI Compliant" />
                    <TrustBadge label="NRB Regulated" />
                </div>
            </div>
        </div>
    )
}
