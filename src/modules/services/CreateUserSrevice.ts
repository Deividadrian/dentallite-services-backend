import { userRepository } from "@modules/repositories/UserRepository"
import AppError from "@shared/errors/AppErros"

interface IRequest{
  name: string
}

class CreateUserSrevice {
  public async execute({ name }: IRequest) {
    const userR = userRepository
    const userExists = await userR.findByName(name)

    if(userExists) {
      throw new AppError('There is already one user with this name')
    }

    const user = userR.create({ name })
    await userR.save(user)

    return user
  }
}

export default CreateUserSrevice