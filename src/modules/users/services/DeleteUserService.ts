import { userRepository } from "@modules/users/infra/typeorm/repositories/UserRepository";
import AppError from "@shared/errors/AppErros";


interface IResquest {
  id: string;
}

class DeleteUserService {
  public async execute({id}: IResquest) {
    const userR = userRepository

    const user = await userR.findById(id)

    if(!user) {
      throw new AppError('User not found.')
    }

    await userRepository.remove(user)
  }
}

export default DeleteUserService