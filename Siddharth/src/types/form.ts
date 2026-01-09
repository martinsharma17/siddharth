export type AccountType = 'Individual' | 'Minor'
export type Nationality = 'Nepalese' | 'Other'

export interface AccountOpeningFormData {
    // Step 1: Account Setup
    accountProduct: string
    isExistingCustomer: boolean
    accountType: AccountType

    // Step 2: Personal Details
    salutation: string
    firstName: string
    middleName?: string
    lastName: string
    dateOfBirth: string
    dateOfBirthType: 'AD' | 'BS'
    nationality: Nationality
    isNRN: boolean
    nrnNumber?: string

    // Step 3: Contact Information
    mobileNumber: string
    email: string
    preferredContactMedium: 'WhatsApp' | 'Viber' | 'Email' | 'SMS'

    // Step 4: Identification
    idNumber: string
    issuedDistrict: string
    issueDate: string
}
