import { default as User } from '../models/user';
import { Request, Response } from 'express';

const label = '\n****\t'
const errorHandler = (err: Error, res: Response, message: String) => {
  console.log(`${label}Error: ${err.message}`);
  res.json({ data: message, err: true });
}

export const list = (req: Request, res: Response) => {
  User.find((err: Error, users) => {
    if (err) { errorHandler(err, res, 'Error listing the users.'); }
    res.json({ data: users, err: false });
  });
}

export const create = (req: Request, res: Response) => {
  const newUser = new User(req.body);
  newUser.save((err: Error, user) => {
    if (err) { errorHandler(err, res, 'Error saving the user.'); }
    res.json({ data: user, err: false });
  });
}

export const read = (req: Request, res: Response) => {
  User.findById({ _id: req.params.id }, (err: Error, user) => {
    if (err) { errorHandler(err, res, 'Error reading the user.'); }
    res.json({ data: user, err: false });
  });
}

export const update = (req: Request, res: Response) => {
  User.findByIdAndUpdate({ _id: req.body.id },
  {
    name: req.body.name,
    email: req.body.email,
    birthday: req.body.birthday,
    update: Date.now()
  }, { new: true }, (err: Error, user) => {
    if (err) { errorHandler(err, res, 'Error updating the user.'); }
    res.json({ data: user, err: false });
  });
}

export const remove = (req: Request, res: Response) => {
  User.remove({ _id: req.params.id }, (err: Error) => {
    if (err) { errorHandler(err, res, 'Error deleting the user'); }
    res.json({ err: false });
  });
}
