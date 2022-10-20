import { getCustomRepository } from "typeorm";
import { UserRepository } from "../typeorm/repositories/UserRepository";
import AppError from "@shared/errors/AppErros";

interface IResquest {
  id: string;
}

class DeleteUserService {
  public async execute({id}: IResquest) {
    const usersRepository = getCustomRepository(UserRepository)

    const user = await usersRepository.findOne(id);

    if(!user) {
      throw new AppError('User not found.')
    }

    await usersRepository.remove(user)
  }
}

export default DeleteUserService