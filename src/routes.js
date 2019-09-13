import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Diego',
    email: 'diego',
    password_hash: '123',
  });
  return res.json({ ok: true });
});

export default routes;
