import * as express from 'express'
import { router as credit_cards } from './credit-card.router'
import { router as transactions } from './transaction.router'

const app = express()
const port = 3000

app.use('/credit_cards', credit_cards)
app.use('/transactions', transactions)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})