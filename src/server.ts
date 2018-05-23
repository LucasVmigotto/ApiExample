import * as mongoose from 'mongoose';
import configs from './configs/db';
import log from './util/logLabel';
import app from './app';
import { Server } from 'http';

let server: Server = null;

(<any> mongoose).connect(configs.url).then(
  () => {
    console.log(`${log()}Connected with the database.`);
    server = app.listen(app.get('port'), (err: Error) => {
      if (err) {
        console.log(`${log()}A error occurred while running the application.` +
          `${log()}Error description: ${err.message}`);
      }
      console.log(`${log()}Application running.` +
        `${log()}URL: https://localhost:${app.get('port')}` +
        `${log()}Environment: ${app.get('env')}`);
    });
  }
).catch((err: Error) => {
  if (err) {
    console.log(`${log()}Error while connecting to the database.` +
      `${log()}Make sure the mongo service is started.` +
      `${log()}To try fix this, run in the terminal 'sudo service mongod start'` +
      `${log()}Error description: ${err.message}`);
  }
});

export default server;
