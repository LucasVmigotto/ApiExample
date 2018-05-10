import { Express, Request, Response } from 'express';
import * as controller from '../controlles/usercontroller'

export default (app: Express) => {
  app.route('/user')
    .get(controller.list)
    .post(controller.create);
  app.route('/user:id')
    .get(controller.read)
    .put(controller.update)
    .delete(controller.remove);
  app.use((req: Request, res: Response) => {
    res.status(404).send({ data: `${req.originalUrl} not found.` })
  });
}
