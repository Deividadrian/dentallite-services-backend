import ListUserService from '@modules/users/services/ListUserService';
import { Request, Response } from 'express';

export default class UserController {
  public async index(request: Request, response: Response) {

    const listuser = new ListUserService()

    const user = await listuser.execute()

    return response.json(user)

  }
}