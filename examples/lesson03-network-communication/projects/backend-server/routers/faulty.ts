import { Router } from 'express';
import * as cors from 'cors';
import * as faulty from '../controllers/faulty';

const router = Router();

router.use(cors());

router.get('/launch_vehicles', faulty.listLaunchVehicles);

router.get('/astronauts', faulty.listAstronauts);

export { router };