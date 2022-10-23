import { Router } from 'express';
import UsersController from '../controller/UsersController';
import { celebrate, Joi, Segments } from 'celebrate';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.get('/', usersController.index);

usersRouter.post(
  '/', 
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required()
    }
  }),
  usersController.create);


usersRouter.delete(
  '/:id', 
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required()
    }
  }),
  usersController.delete);

  usersRouter.put(
    '/:id',
    celebrate({
      [Segments.BODY]: {
        name: Joi.string().required()
      },
      [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
      }
    }),
    usersController.update
  );

  usersRouter.get(
    '/:id',
    celebrate({
      [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
      }
    }),
    usersController.show
  )

export default usersRouter