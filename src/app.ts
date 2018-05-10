import * as express from 'express';
import * as mongoose from 'mongoose';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import routes from './routes/routes';
import configs from './configs/db'
import { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } from 'constants';
const port = process.env.PORT || 8000;
const app = express();

(<any> mongoose).connect(configs.url).then(
  () => {
    console.log('\n****\tConnecting to the database...');
  }
).catch((err: Error) => {
  if (err) {
    console.log('\n****\tError while connecting to the database.\n' +
      '****\t\tMake sure the mongo service is started.\n' +
      '****\t\tTo try fix this, run in the terminal \'sudo service mongod start\'' +
      `****\t\tError description: ${err.message}\n`);
  }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use(morgan('combined'))
routes(app);
app.use(cors());
app.set('port', port);

export default app;
