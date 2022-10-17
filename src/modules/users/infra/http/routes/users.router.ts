import UserController from '../controllers/UsersController';
import { Router } from 'express';

const usersRouter = Router();
const userController = new UserController();

usersRouter.get('/', userController.index);
usersRouter.get('/:id', userController.show);
usersRouter.post('/', userController.create);

export default usersRouter;