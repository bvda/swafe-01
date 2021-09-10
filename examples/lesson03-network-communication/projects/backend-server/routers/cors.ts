import { Router } from 'express';
import * as cors from 'cors';
import * as astronautController from '../controllers/astronauts'
import * as launchVehicleController from '../controllers/launch_vehicles'

const router = Router();

router.use(cors());

router.get('/launch_vehicles', launchVehicleController.list)
router.post('/launch_vehicle', launchVehicleController.update)

router.get('/astronauts', astronautController.list)
router.delete('/astronauts', astronautController.remove)
router.patch('/astronauts', astronautController.update)

export { router };