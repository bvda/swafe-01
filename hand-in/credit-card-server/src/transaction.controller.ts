import { CREDIT_CARD_DATA } from './credit-card.data'
import { TRANSACTION_DATA } from './transaction.data'
import { CURRENCIES, Transaction } from './transaction.type'
import { v4 } from 'uuid'

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
      uid: v4(),
      amount: Math.random() * Math.floor(Math.random() * 1000), 
      comment: '', 
      date: Date.now(),
      currency: CURRENCIES[Math.floor(Math.random() * CURRENCIES.length)] 
    })
  }
  res.json(result)
}

export const remove = function(req, res) {
  const params = req.params
  TRANSACTION_DATA.splice(TRANSACTION_DATA.findIndex(x => x.uid === params.transaction_uid), 1)
  res.json({
    date: Date.now(),
    message: `Transaction ${params.transaction_uid} deleted`
  })
}