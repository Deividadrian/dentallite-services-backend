import 'reflect-metadata';
import { Router } from 'express';
import usersRouter from '@modules/users/routes/users.routes';

const routes = Router();

routes.use('/users', usersRouter);
/*routes.get('/', (request, response) => {
    return response.json({ mensage: 'Hello Dev!' })*
});*/

export default routes;