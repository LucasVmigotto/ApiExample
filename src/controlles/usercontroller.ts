import { default as User, UserModel } from '../models/user';
import { Request, Response } from 'express';
import log from '../util/logLabel';

const errorHandler = (err: Error, res: Response, message: String) => {
  console.log(`${log()}Error: ${err.message}`);
  res.json({ data: message, err: true });
}

export const list = (req: Request, res: Response) => {
  User.find((err: Error, users) => {
    if (err) { return errorHandler(err, res, 'Error listing the users.'); }
    res.json({ data: users, err: false });
  });
}

export const create = (req: Request, res: Response) => {
  const newUser = new User(req.body);
  newUser.save((err: Error, user) => {
    if (err) { return errorHandler(err, res, 'Error saving the user.'); }
    res.json({ data: user, err: false });
  });
}

export const read = (req: Request, res: Response) => {
  User.findById({ _id: req.params.id }, (err: Error, user) => {
    if (err) { return errorHandler(err, res, 'Error reading the user.'); }
    res.json({ data: user, err: false });
  });
}

export const update = (req: Request, res: Response) => {
  let user = req.body;
  user.update = Date.now();
  User.findByIdAndUpdate({ _id: req.body.id }, user, { new: true }, (err: Error, user) => {
    if (err) { return errorHandler(err, res, 'Error updating the user.'); }
    res.json({ data: user, err: false });
  });
}

export const remove = (req: Request, res: Response) => {
  User.remove({ _id: req.params.id }, (err: Error) => {
    if (err) { return errorHandler(err, res, 'Error deleting the user'); }
    res.json({ err: false });
  });
}
