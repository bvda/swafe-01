import { Router, json } from 'express'
import * as controller from './credit-card.controller'

const router = Router()

router.use(json())

router.get('/', controller.list)
router.get('/:card_number', controller.card)
router.post('/', controller.create)
router.delete('/:card_number', controller.remove)

export { router }