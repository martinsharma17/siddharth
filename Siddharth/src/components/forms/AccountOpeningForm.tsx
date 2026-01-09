import { useForm } from "react-hook-form"
import { Header } from "../layout/Header"
import { Footer } from "../layout/Footer"
import type { AccountOpeningFormData } from "../../types/form"
import { Calendar, HelpCircle, CheckCircle } from "lucide-react"
import NepaliDatePicker from "@sbmdkl/nepali-datepicker-reactjs"
import "@sbmdkl/nepali-datepicker-reactjs/dist/index.css"
import { bsToAd, adToBs } from "../../lib/dateUtils"
import { useState } from "react"

export function AccountOpeningForm() {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const methods = useForm<AccountOpeningFormData>({
        defaultValues: {
            accountType: 'Individual',
            isExistingCustomer: false,
            salutation: 'Mr',
            applyingFromLocation: 'Inside the Country',
            isNRN: false,
            accountProduct: 'Siddhartha Bachat-SVNR'
        }
    })

    const { handleSubmit, register, watch, setValue, formState: { errors } } = methods

    const onSubmit = (data: AccountOpeningFormData) => {
        console.log("Form Submitted:", data)
        setIsSubmitted(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const isExisting = watch("isExistingCustomer")
    const dobBS = watch("dateOfBirthBS")
    const idBS = watch("idIssueDateBS")

    // Manual Handlers for instant sync
    const handleBSChange = (name: "dateOfBirthBS" | "idIssueDateBS", adName: "dateOfBirthAD" | "idIssueDateAD", value: string) => {
        const normalized = value.replace(/\//g, '-');
        setValue(name, normalized);
        const convertedAD = bsToAd(normalized);
        if (convertedAD) {
            setValue(adName, convertedAD);
        }
    }

    const handleADChange = (name: "dateOfBirthAD" | "idIssueDateAD", bsName: "dateOfBirthBS" | "idIssueDateBS", value: string) => {
        setValue(name, value);
        const convertedBS = adToBs(value);
        if (convertedBS) {
            setValue(bsName, convertedBS);
        }
    }

    /**
     * Consumes randomuser.me API to auto-fill the form with demo data
     */
    const fetchAndFillData = async () => {
        try {
            // Fetching data from the Random User API
            const response = await fetch('https://randomuser.me/api/');
            const data = await response.json();
            const user = data.results[0];

            // Mapping API response to our Form structure using setValue
            if (user) {
                // Personal Details
                setValue("firstName", user.name.first);
                setValue("lastName", user.name.last);
                setValue("email", user.email);
                setValue("mobileNumber", user.phone.replace(/[\(\)\-\s]/g, '').substring(0, 10)); // Clean phone for demo

                // Date of Birth (A.D.)
                const dobAD = user.dob.date.split('T')[0];
                setValue("dateOfBirthAD", dobAD);

                // Manually trigger AD to BS conversion for the fetched date
                const convertedBS = adToBs(dobAD);
                if (convertedBS) {
                    setValue("dateOfBirthBS", convertedBS);
                }

                // Salutation mapping
                const title = user.name.title;
                if (['Mr', 'Mrs', 'Miss'].includes(title)) {
                    setValue("salutation", title as any);
                }

                console.log("Form auto-filled with demo data:", user);
            }
        } catch (error) {
            console.error("Error fetching demo data:", error);
            alert("Failed to fetch demo data. Please check your connection.");
        }
    }

    return (
        <div className="min-vh-100 bg-white d-flex flex-column">
            <Header />

            {/* Premium Hero Section */}
            <div className="hero-gradient py-5 position-relative overflow-hidden text-white shadow-lg">
                <div className="hero-pattern"></div>
                <div className="container position-relative z-1 py-5 text-center">
                    <span className="badge bg-white text-dark mb-3 px-3 py-2 rounded-pill fw-bold" style={{ fontSize: '10px', letterSpacing: '2px' }}>VERIFIED PORTAL</span>
                    <h1 className="display-4 fw-bold mb-3" style={{ letterSpacing: '-1px' }}>Account Opening Portal</h1>
                    <p className="lead opacity-75 mb-5 mx-auto" style={{ maxWidth: '600px' }}>Join Siddhartha Bank today and experience the future of secure digital banking in Nepal.</p>

                    <div className="glass-card p-4 mx-auto border-0 bg-white bg-opacity-10" style={{ maxWidth: '450px' }}>
                        <label className="modern-label text-white opacity-75">Selected Banking Product</label>
                        <select
                            {...register("accountProduct")}
                            className="form-select border-0 shadow-lg text-dark fw-bold mb-3"
                            style={{ borderRadius: '12px', padding: '12px' }}
                        >
                            <option value="Siddhartha Bachat-SVNR">Siddhartha Bachat-SVNR (Premium)</option>
                            <option value="Siddhartha Normal Saving">Siddhartha Normal Saving</option>
                        </select>
                        <button
                            type="button"
                            onClick={fetchAndFillData}
                            className="btn btn-warning w-100 fw-bold rounded-pill text-white shadow"
                            style={{ padding: '12px' }}
                        >
                            ✨ Magic Auto-fill Demo
                        </button>
                    </div>
                </div>
            </div>

            <main className="container flex-grow-1 py-5 px-3 px-md-5">
                {!isSubmitted ? (
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Existing Account Toggle */}
                        <div className="text-center mb-5 pb-4 border-bottom border-light">
                            <label className="modern-label h6 mb-4">Account Status Identification</label>
                            <div className="d-flex align-items-center justify-content-center gap-4">
                                <span className={`fw-bold transition-all ${!isExisting ? 'text-primary' : 'text-muted'}`} style={{ fontSize: '14px' }}>New Customer</span>
                                <div className="form-check form-switch p-0 m-0">
                                    <input
                                        className="form-check-input ms-0 shadow-none cursor-pointer"
                                        type="checkbox"
                                        role="switch"
                                        style={{ width: '3.5em', height: '1.75em', backgroundColor: isExisting ? '#f2ae1b' : '#e2e8f0' }}
                                        {...register("isExistingCustomer")}
                                    />
                                </div>
                                <span className={`fw-bold transition-all ${isExisting ? 'text-primary' : 'text-muted'}`} style={{ fontSize: '14px' }}>Existing Customer</span>
                            </div>
                            <p className="small text-muted mt-3">Do you currently hold an active account with us?</p>
                        </div>

                        <div className="glass-card p-4 p-md-5 mb-5">
                            {/* Section 1: Account Parameters */}
                            <div className="mb-5">
                                <h4 className="section-title">Account Specifications</h4>
                                <div className="row g-4 pt-3">
                                    <div className="col-12 col-md-4">
                                        <label className="modern-label">Account Type *</label>
                                        <div className="d-flex gap-3">
                                            {['Individual', 'Minor'].map((type) => (
                                                <div key={type} className="flex-grow-1">
                                                    <input type="radio" className="btn-check" value={type} {...register("accountType")} id={`accType${type}`} />
                                                    <label className="btn btn-outline-warning w-100 py-3 rounded-3 fw-bold small" htmlFor={`accType${type}`}>{type}</label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <label className="modern-label">Salutation *</label>
                                        <select {...register("salutation")} className="form-select modern-input">
                                            {['Mr', 'Mrs', 'M/S', 'Miss', 'Minor'].map(s => <option key={s} value={s}>{s}</option>)}
                                        </select>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <label className="modern-label">Nepalese Citizen Applying From *</label>
                                        <select {...register("applyingFromLocation")} className="form-select modern-input">
                                            <option>Inside the Country</option>
                                            <option>Outside the Country</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Section 2: Personal Identity */}
                            <div className="mb-5">
                                <h4 className="section-title">Personal Details</h4>
                                <div className="row g-4">
                                    <div className="col-12 col-md-4">
                                        <label className="modern-label">First Name *</label>
                                        <input type="text" className={`form-control modern-input ${errors.firstName ? 'is-invalid border-danger' : ''}`} placeholder="e.g. Siddharth" {...register("firstName", { required: "First name is required" })} />
                                        {errors.firstName && <div className="text-danger small mt-1 fw-bold">{errors.firstName.message}</div>}
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <label className="modern-label">Middle Name</label>
                                        <input type="text" className="form-control modern-input" placeholder="Optional" {...register("middleName")} />
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <label className="modern-label">Last Name *</label>
                                        <input type="text" className={`form-control modern-input ${errors.lastName ? 'is-invalid border-danger' : ''}`} placeholder="e.g. Sharma" {...register("lastName", { required: "Last name is required" })} />
                                        {errors.lastName && <div className="text-danger small mt-1 fw-bold">{errors.lastName.message}</div>}
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <label className="modern-label">Mobile No *</label>
                                        <input type="text" className={`form-control modern-input ${errors.mobileNumber ? 'is-invalid border-danger' : ''}`} placeholder="+977-98XXXXXXXX" {...register("mobileNumber", { required: "Mobile number is required", pattern: { value: /^[0-9]{10}$/, message: "Must be a valid 10-digit number" } })} />
                                        {errors.mobileNumber && <div className="text-danger small mt-1 fw-bold">{errors.mobileNumber.message}</div>}
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <label className="modern-label">Phone No.</label>
                                        <input type="text" className="form-control modern-input" placeholder="01-XXXXXXX" {...register("phoneNumber")} />
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <label className="modern-label">Email Address *</label>
                                        <input type="email" className={`form-control modern-input ${errors.email ? 'is-invalid border-danger' : ''}`} placeholder="name@example.com" {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email format" } })} />
                                        {errors.email && <div className="text-danger small mt-1 fw-bold">{errors.email.message}</div>}
                                    </div>
                                </div>
                            </div>

                            {/* Section 3: Legal Dates & Origin */}
                            <div className="mb-5">
                                <h4 className="section-title">Birth & Origin</h4>
                                <div className="row g-4">
                                    <div className="col-12 col-md-4">
                                        <label className="modern-label">Date of Birth (B.S.) *</label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-white border-end-0 rounded-start-2 px-3 modern-input"><Calendar size={18} className="text-warning" /></span>
                                            <NepaliDatePicker
                                                value={dobBS || ""}
                                                handler={(val: string) => handleBSChange("dateOfBirthBS", "dateOfBirthAD", val)}
                                                className="form-control modern-input border-start-0"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <label className="modern-label">Date of Birth (A.D.) *</label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-white border-end-0 rounded-start-2 px-3 modern-input"><Calendar size={18} className="text-warning" /></span>
                                            <input
                                                type="date"
                                                className="form-control modern-input border-start-0"
                                                {...register("dateOfBirthAD")}
                                                onChange={(e) => handleADChange("dateOfBirthAD", "dateOfBirthBS", e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <label className="modern-label">Applying From Country *</label>
                                        <select {...register("applyingFromCountry")} className="form-select modern-input">
                                            <option>Select Country</option>
                                            <option>Nepal</option>
                                            <option>Others</option>
                                        </select>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <label className="modern-label">Other Contact Medium</label>
                                        <select {...register("preferredContactMedium")} className="form-select modern-input">
                                            <option>None</option>
                                            <option>WhatsApp</option>
                                            <option>Viber</option>
                                        </select>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <label className="modern-label">Other Contact Details</label>
                                        <input type="text" className="form-control modern-input" placeholder="ID/Handle" {...register("otherContactDetails")} />
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <label className="modern-label">Are you an NRN ?</label>
                                        <select {...register("isNRN")} className="form-select modern-input" onChange={(e) => methods.setValue("isNRN", e.target.value === "Yes")}>
                                            <option value="No">No</option>
                                            <option value="Yes">Yes</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Section 4: Identification */}
                            <div className="mb-5">
                                <h4 className="section-title">Legal Identification</h4>
                                <div className="row g-4">
                                    <div className="col-12 col-md-6">
                                        <label className="modern-label">National ID Number *</label>
                                        <input type="text" className={`form-control modern-input ${errors.idNumber ? 'is-invalid border-danger' : ''}`} placeholder="XXXX-XXXX" {...register("idNumber",)} />
                                        {errors.idNumber && <div className="text-danger small mt-1 fw-bold">{errors.idNumber.message}</div>}
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label className="modern-label">National ID Issue District *</label>
                                        <select {...register("idIssueDistrict")} className="form-select modern-input">
                                            <option>Select District</option>
                                            <option>Kathmandu</option>
                                            <option>Lalitpur</option>
                                        </select>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label className="modern-label">National ID Issue Date BS *</label>
                                        <NepaliDatePicker
                                            value={idBS || ""}
                                            handler={(val: string) => handleBSChange("idIssueDateBS", "idIssueDateAD", val)}
                                            className="form-control modern-input"
                                        />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label className="modern-label">National ID Issue Date AD *</label>
                                        <input
                                            type="date"
                                            className="form-control modern-input"
                                            {...register("idIssueDateAD")}
                                            onChange={(e) => handleADChange("idIssueDateAD", "idIssueDateBS", e.target.value)}
                                        />
                                    </div>
                                    <div className="col-12 col-md-12">
                                        <label className="modern-label text-dark">Human Verification Code *</label>
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="premium-captcha d-flex align-items-center justify-content-center shadow-sm">SF2M9</div>
                                            <button type="button" className="btn btn-link text-warning p-0 text-decoration-none fw-bold small">Reload Image</button>
                                            <input type="text" className="form-control modern-input flex-grow-1" placeholder="Type the characters seen above" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex flex-column flex-md-row align-items-center justify-content-between pt-5 mt-4 border-top">
                                <p className="small text-muted mb-4 mb-md-0" style={{ maxWidth: '400px' }}>
                                    <HelpCircle size={16} className="me-2 text-warning" />
                                    All information provided is securely encrypted and processed according to the Data Privacy Act.
                                </p>
                                <button type="submit" className="btn btn-premium btn-lg px-5">
                                    Submit Application
                                </button>
                            </div>
                        </div>

                    </form>
                ) : (
                    <div className="glass-card p-5 text-center my-5 shadow-lg border-0 bg-white" style={{ borderRadius: '24px' }}>
                        <div className="mb-4">
                            <CheckCircle size={80} className="text-success mb-3" />
                            <h2 className="display-6 fw-bold text-dark mb-2">Application Received!</h2>
                            <p className="text-muted fs-5">Thank you for choosing Siddhartha Bank. Your application has been submitted successfully.</p>
                        </div>
                        <div className="bg-light p-4 rounded-4 mb-5 border mx-auto" style={{ maxWidth: '400px' }}>
                            <p className="small text-muted mb-1 fw-bold text-uppercase">Reference Number</p>
                            <h4 className="fw-bold text-dark mb-0">SBL-ONLINE-{Math.floor(Math.random() * 1000000)}</h4>
                        </div>
                        <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="btn btn-premium btn-lg px-5 rounded-pill shadow-sm"
                            >
                                Submit Another Application
                            </button>
                            <button
                                onClick={() => window.location.reload()}
                                className="btn btn-outline-secondary btn-lg px-5 rounded-pill"
                            >
                                Back to Portal
                            </button>
                        </div>
                        <p className="mt-5 small text-muted">
                            Our representative will contact you shortly to complete the verification process.
                        </p>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    )
}


