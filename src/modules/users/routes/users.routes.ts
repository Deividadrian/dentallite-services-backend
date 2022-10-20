import { Router } from 'express';
import UsersController from '../controller/UsersController';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post('/', usersController.create);
usersRouter.get('/', usersController.index);
usersRouter.delete('/:id', usersController.delete);

export default usersRouter