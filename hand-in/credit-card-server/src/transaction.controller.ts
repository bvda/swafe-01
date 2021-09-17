import { CREDIT_CARD_DATA } from './credit-card.data'
import { TRANSACTION_DATA } from './transaction.data'
import { CURRENCIES, Transaction } from './transaction.type'

export const list = function(_, res) {
  res.json(TRANSACTION_DATA)
}

export const create = function(req, res) {
  const transaction = req.body as Transaction
  console.log(transaction)
  TRANSACTION_DATA.push(transaction)
  res.status(201)
  res.json({
    date: Date.now(),
    message: 'Created credit card'
  })
}

export const generate = function(req, res) {
  let result = []
  for(let i = 0; i < 1000; i++) {
    result.push({ 
      credit_card: CREDIT_CARD_DATA[Math.floor(Math.random() * CREDIT_CARD_DATA.length)], 
      amount: Math.random() * Math.floor(Math.random() * 1000), 
      comment: '', 
      date: Date.now(),
      currency: CURRENCIES[Math.floor(Math.random() * CURRENCIES.length)] 
    })
  }
  res.json(result)
}