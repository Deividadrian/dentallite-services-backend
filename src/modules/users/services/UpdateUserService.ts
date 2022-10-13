import { userRepository } from "@modules/users/infra/typeorm/repositories/UserRepository"
import AppError from "@shared/errors/AppErros"

interface IRequest{
  id: string;
  name: string;
}

class UpdateUserSrevice {
  public async execute({ id, name }: IRequest) {
    const userR = userRepository
    const user = await userR.findById(id)

    if(!user) {
      throw new AppError('User not found')
    }

    const userExists = await userR.findByName(name)

    if(userExists && name != user.name) {
      throw new AppError('There is already one user with this name')
    }

    user.name = name

    await userRepository.save(user)

    return user
  }
}

export default UpdateUserSrevice