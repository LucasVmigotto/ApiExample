import { Express, Request, Response } from 'express';
import * as controller from '../controlles/usercontroller'

export default (app: Express) => {
  app.route('/user')
    .get(controller.list)
    .post(controller.create)
    .put(controller.update);
  app.route('/user/:id')
    .get(controller.read)
    .delete(controller.remove);
  app.use((req: Request, res: Response) => {
    res.status(404).send({ data: `${req.originalUrl} not found.` })
  });
}
