import * as express from 'express';
import { router as corsRouter } from './routers/cors'
import { router as apiRouter } from './routers/api'

const app = express();
const port = 3000;

app.use(express.json())

app.use('/cors', corsRouter)
app.use('/api', apiRouter)

app.listen(port, () => {
  console.log('Listening on localhost:3000');
});