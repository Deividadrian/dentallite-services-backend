import CreateUserService from '@modules/users/services/CreateUserService';
import ListUserService from '@modules/users/services/ListUserService';
import ShowUserService from '@modules/users/services/ShowUserService';
import { Request, Response } from 'express';

export default class UserController {
  public async index(request: Request, response: Response) {

    const listUser = new ListUserService()

    const user = await listUser.execute()

    return response.json(user)

  }

  /*public async show(request: Request, response: Response) {
    const { id } = request.params

    const showUser = new ShowUserService()

    const user = showUser.execute(id)

    return response.json(user)
  }
  
  public async create(request: Request, response: Response) {
    const { name } = request.params

    const createUser = new CreateUserService()

    const user = createUser.execute({ name })

    return response.json(user)
  }*/
}