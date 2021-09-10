import * as express from 'express';
import { router as corsRouter } from './routers/cors'
import { router as apiRouter } from './routers/api'
import { router as faultyRouter} from './routers/faulty'

const app = express();
const port = 3000;

app.use(express.json())

app.use('/faulty', faultyRouter)
app.use('/api', apiRouter)
app.use('/cors', corsRouter)

app.listen(port, () => {
  console.log('Listening on localhost:3000');
});