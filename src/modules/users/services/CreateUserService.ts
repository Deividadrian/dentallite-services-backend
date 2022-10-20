import User from "../typeorm/entities/User";
import { UserRepository } from "../typeorm/repositories/UserRepository"
import { getCustomRepository } from 'typeorm';
import AppError from "@shared/errors/AppErros"

interface IRequest {
  name: string
}

class CreateUserService {
  public async execute({name}: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UserRepository);
    const usersExists = await usersRepository.findByName(name);

    if(usersExists) {
      throw new AppError("There is a user with this name");
    }

    const user = usersRepository.create({
      name
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService