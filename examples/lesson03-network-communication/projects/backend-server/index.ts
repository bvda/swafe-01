import * as express from 'express';
import * as cors from 'cors';
import { list as launch_vehicles } from './launch_vehicles'
import { list as astronauts } from './astronauts'

const app = express();
const port = 3000;

app.use(cors())

app.get('/', (req, res) => {
  res.send({ message: 'Hello, world!'})
})

app.get('/launch_vehicles', launch_vehicles)

app.get('/astronauts', astronauts)

app.listen(port, () => {
  console.log('Listening on localhost:3000');
});