import * as express from 'express';
import * as cors from 'cors';
import { list as launch_vehicles } from './launch_vehicles'
import { update } from './launch_vehicles'
import { list as astronauts } from './astronauts'

const app = express();
const port = 3000;

// app.use(cors())
app.use(express.json())

app.get('/launch_vehicles', launch_vehicles)
app.post('/launch_vehicle', update)

app.get('/astronauts', astronauts)

app.listen(port, () => {
  console.log('Listening on localhost:3000');
});