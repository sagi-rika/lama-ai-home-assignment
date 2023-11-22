import { LenderAppetiteI } from '../../types/lender'
import { LoanApplicationI } from '../../types/loan-application'

export const checkLenderConstraints = (lenderAppetite: LenderAppetiteI, application: LoanApplicationI) =>
  Object.entries(lenderAppetite).every(([constraintName, constraintValue]) => {
    switch (constraintName) {
      case 'riskLevel': {
        const { riskLevel: applicationRiskLevel } = application
        const riskLevelConstraint: NonNullable<LenderAppetiteI['riskLevel']> = constraintValue

        const minimum = riskLevelConstraint.min ?? 1
        const maximum = riskLevelConstraint.max ?? 100

        return applicationRiskLevel >= minimum && applicationRiskLevel <= maximum
      }

      case 'acceptedBorrowerTypes': {
        const { borrowerType: applicationBorrowerType } = application
        const borrowerTypeConstraint: NonNullable<LenderAppetiteI['acceptedBorrowerTypes']> = constraintValue

        return borrowerTypeConstraint.includes(applicationBorrowerType)
      }

      case 'requestedAmount': {
        const { requestedAmount: applicationRequestedAmount } = application
        const requestedAmountConstraint: NonNullable<LenderAppetiteI['requestedAmount']> = constraintValue

        const minimum = requestedAmountConstraint.min ?? 1
        const maximum = requestedAmountConstraint.max ?? Infinity

        return applicationRequestedAmount >= minimum && applicationRequestedAmount <= maximum
      }

      case 'acceptedStates': {
        const { state: applicationState } = application
        const stateConstraint: NonNullable<LenderAppetiteI['acceptedStates']> = constraintValue

        return stateConstraint.includes(applicationState)
      }

      case 'acceptedLoanTypes': {
        const { loanType: applicationLoanType } = application
        const loanTypeConstraint: NonNullable<LenderAppetiteI['acceptedLoanTypes']> = constraintValue

        return loanTypeConstraint.includes(applicationLoanType)
      }

      case 'acceptedIndustries': {
        const { industry: applicationIndustry } = application
        const industryConstraint: NonNullable<LenderAppetiteI['acceptedIndustries']> = constraintValue

        if (!applicationIndustry) return false

        return industryConstraint.includes(applicationIndustry)
      }
    }
  })
