import { CREDIT_CARD_DATA } from './credit-card.data'
import { CreditCard } from './credit-card.type'
import { v4 } from 'uuid'

export const list = function(_, res) {
  res.json(CREDIT_CARD_DATA)
}

export const card = function(req, res) {
  res.json(...CREDIT_CARD_DATA.filter(c => c.card_number == req.params.card_number))
}

export const create = function(req, res) {
  console.log(req.body as CreditCard)
  const credit_card = {...req.body as CreditCard, uid: v4()}
  CREDIT_CARD_DATA.push(credit_card)
  res.status(201)
  res.json({
    date: Date.now(),
    message: 'Created credit card'
  })
}

export const remove = function(req, res) {
  const params = req.params
  CREDIT_CARD_DATA.splice(CREDIT_CARD_DATA.findIndex(x => x.card_number === +params.card_number), 1)
  res.json({
    date: Date.now(),
    message: `Card ${params.card_number} deleted`
  })
}