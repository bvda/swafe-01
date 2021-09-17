import { Router } from 'express'
import * as cors from 'cors'
import * as controller from './transaction.controller'

const router = Router()
router.use(cors())

router.get('/', controller.list)
router.post('/', controller.create)
router.get('/generate', controller.generate)

export { router }