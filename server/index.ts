import express from 'express'
import { applicationMatchRouter } from './routes'

const app = express()

app.use(express.json())

const start = (): void => {
  try {
    app.use(applicationMatchRouter)
    app.listen(3000, () => {
      console.log('Server started on port 3000')
    })
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

start()
