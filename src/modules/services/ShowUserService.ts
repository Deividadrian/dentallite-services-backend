import { userRepository } from '../repositories/UserRepository';

interface IResquest {
  id: string;
}

class ShowUserService {
  public async execute({ id }: IResquest) {
    const userR = userRepository
    const user = userR.findById(id)

    return user
  }
}

export default ShowUserService