import UserController from '../controllers/UsersController';
import { Router } from 'express';

const usersRouter = Router();
const userController = new UserController();

usersRouter.get('/', userController.index);

export default usersRouter;