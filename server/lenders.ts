import { LenderI } from './types/lender'

export const lenders: Array<LenderI> = [
  {
    name: 'First Lama Bank',
    appetite: {
      riskLevel: {
        max: 80
      }
    }
  },
  {
    name: 'Bank HaPoalama',
    appetite: {
      riskLevel: { max: 60 },
      acceptedStates: ['CA']
    }
  },
  {
    name: 'Salt and Pepper',
    appetite: {
      requestedAmount: {
        min: 500_000
      },
      riskLevel: {
        max: 80
      },
      acceptedBorrowerTypes: ['business']
    }
  },
  {
    name: 'Bank Otzar Halama',
    appetite: {
      acceptedLoanTypes: ['Line Of Credit Loan'],
      acceptedIndustries: ['restaurant']
    }
  },
  {
    name: 'Lama International Bank',
    appetite: {
      requestedAmount: {
        max: 200_000
      }
    }
  }
]
