import { Request, Response } from 'express';
import ListUserService from '../services/ListUserService';
import DeleteUserService from '../services/DeleteUserService';
import CreateUserService from '../services/CreateUserService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {name} = request.body;

    const createUser = new CreateUserService();

    const users = await createUser.execute({name});

    return response.json(users);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listUser = new ListUserService();

    const users = await listUser.execute();

    return response.json(users);
  }

  public async deleteUser(request: Request, response: Response): Promise<Response> {
    const {id} = request.params;

    const deleteUser = new DeleteUserService();

    await deleteUser.execute({ id });

    return response.json([]);
  }
}