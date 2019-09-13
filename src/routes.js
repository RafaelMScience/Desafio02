import { Router } from 'express';

import UserController from './App/controllers/UserControllers';
import SessionController from './App/controllers/SessionController';

import authMiddleware from './App/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;
