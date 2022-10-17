import { userRepository } from "@modules/users/infra/typeorm/repositories/UserRepository"
import AppError from "@shared/errors/AppErros"

interface IRequest{
  name: string
}

class CreateUserService {
  public async execute({ name }: IRequest) {
    const userR = userRepository
    const userExists = userR.create(name)

    if(userExists) {
      throw new AppError('There is already one user with this name')
    }

    const user = userR.create({ name })
    await userR.save(user)

    return user
  }
}

export default CreateUserService