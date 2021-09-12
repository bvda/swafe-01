import { Router } from 'express'
import * as auth from '../controllers/auth'
import * as astronautController from '../controllers/astronauts'

const router = Router()
router.post('/login', auth.login)
router.get('/astronauts', auth.verifyToken, astronautController.list)

export { router }