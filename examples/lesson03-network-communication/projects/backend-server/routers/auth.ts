import { Router } from 'express'
import * as cors from 'cors'
import * as auth from '../controllers/auth'
import * as astronautController from '../controllers/astronauts'

const router = Router()
router.use(cors())

router.post('/login', auth.login)
router.get('/astronauts', auth.verifyToken, astronautController.list)

export { router }