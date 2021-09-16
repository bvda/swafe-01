import { CREDIT_CARD_DATA } from './credit-card.data'
import { CreditCard } from './credit-card.type'

export const list = function(_, res) {
  res.json(CREDIT_CARD_DATA)
}

export const create = function(req, res) {
  const creditCard = req.body as CreditCard
  console.log(creditCard)
  CREDIT_CARD_DATA.push(creditCard)
  res.status(201)
  res.json({
    date: Date.now(),
    message: 'Created credit card'
  })
}