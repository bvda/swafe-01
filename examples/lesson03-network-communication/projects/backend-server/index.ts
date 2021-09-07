import * as express from 'express';
import * as cors from 'cors';

const app = express();
const port = 3000;

app.use(cors())

app.get('/', (req, res) => {
  res.send({ message: 'Hello, world!'})
})

app.listen(port, () => {
  // const {address, port} = server.address();
  // console.log('Listening on %s %s', address, port);
  console.log('Listening on localhost:3000');
});