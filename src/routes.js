import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionCotroller';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// QUANDO DECLARAMOS O MIDDLEWARE DA MANEIRA ABAIXO, E NÃO LOCALMENTE, TODAS AS ROTAS
// CADASTRADAS ABAIXO DESTA LINHA UTILIZARÃO ESTE MIDDLEWARE
routes.use(authMiddleware);
routes.put('/users', UserController.update);

export default routes;
