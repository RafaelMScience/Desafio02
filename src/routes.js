import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './App/controllers/UserControllers';
import SessionController from './App/controllers/SessionController';

import authMiddleware from './App/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/files', upload.single('file'), (req, res) => {
  return res.json({ ok: true });
});
export default routes;
