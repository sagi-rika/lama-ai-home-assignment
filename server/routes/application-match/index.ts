import express, { Request, Response } from 'express'

import { schemaValidation } from '../../middlewares/schema-validation'
import { LoanApplicationI } from '../../types/loan-application'
import { lenders } from '../../lenders'
import { applicationMatchSchema } from './validation-schema'
import { checkLenderConstraints } from './utils'

const router = express.Router()

router.post(
  '/applicationMatch',
  schemaValidation(applicationMatchSchema),
  (req: Request<object, object, LoanApplicationI>, res: Response<Array<string>>): Response => {
    const loanApplication = req.body

    const matchingLenders = lenders.filter(({ appetite }) => checkLenderConstraints(appetite, loanApplication))
    const matchingLendersByConstraintsNumber = matchingLenders.sort(
      (lenderA, lenderB) => Object.keys(lenderB.appetite).length - Object.keys(lenderA.appetite).length
    )

    return res.json(matchingLendersByConstraintsNumber.slice(0, 2).map(lender => lender.name))
  }
)

export const applicationMatchRouter = router
