export type AccountType = 'Individual' | 'Minor'
export type Nationality = 'Nepalese' | 'Other'

export interface AccountOpeningFormData {
    // Basic Info
    accountProduct: string
    isExistingCustomer: boolean
    accountType: AccountType
    salutation: string
    applyingFromLocation: string // Inside the Country, outside, etc.

    // Personal Details
    firstName: string
    middleName?: string
    lastName: string
    mobileNumber: string
    phoneNumber?: string
    email: string

    // Dates
    dateOfBirthBS: string
    dateOfBirthAD: string
    applyingFromCountry: string

    // Contact & NRN
    preferredContactMedium: string
    otherContactDetails?: string
    isNRN: boolean

    // Identification
    idNumber: string
    idIssueDateBS: string
    idIssueDateAD: string
    idIssueDistrict: string
}

