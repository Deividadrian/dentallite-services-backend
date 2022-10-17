import { User } from './../infra/typeorm/entities/User';
import { userRepository } from '../infra/typeorm/repositories/UserRepository';

class ShowUserService {
  public async execute() {
    const user = await userRepository.find()

    return user
  }
}

export default ShowUserService