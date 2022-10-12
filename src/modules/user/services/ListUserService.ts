import { userRepository } from "@modules/user/infra/typeorm/repositories/UserRepository";

class ListUserService {
  public async execute() {
    const userR = userRepository

    const user = userR.find()

    return user
  }
}

export default ListUserService