import { BorrowerTypes, BusinessIndustries, LoanTypes, UsStates } from './common'

export interface LoanApplicationI {
  requestedAmount: number
  borrowerType: BorrowerTypes
  loanType: LoanTypes
  industry?: BusinessIndustries
  state: UsStates
  riskLevel: number
}
