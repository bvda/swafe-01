
import { Router, json } from 'express'
import * as cors from 'cors'
import * as controller from './credit-card.controller'

const router = Router()
router.use(cors())
router.use(json())

router.get('/', controller.list)

router.post('/', controller.create)

export { router }