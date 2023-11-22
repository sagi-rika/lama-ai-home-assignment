import { BorrowerTypes, BusinessIndustries, LoanTypes, UsStates } from './common'

export interface LenderAppetiteI {
  riskLevel?: {
    min?: number
    max?: number
  }
  requestedAmount?: {
    min?: number
    max?: number
  }
  acceptedStates?: Array<UsStates>
  acceptedBorrowerTypes?: Array<BorrowerTypes>
  acceptedLoanTypes?: Array<LoanTypes>
  acceptedIndustries?: Array<BusinessIndustries>
}

export interface LenderI {
  name: string
  appetite: LenderAppetiteI
}
