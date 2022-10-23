import AppError from '@shared/errors/AppErros';
import { UserRepository } from '../typeorm/repositories/UserRepository';
import { getCustomRepository } from "typeorm";
import User from '../typeorm/entities/User';

interface IResquest {
    id: string;
    name: string;
}

class UpdateUserService {
    public async execute({id, name}: IResquest): Promise<User> {
        const usersRepository = getCustomRepository(UserRepository);

        const user = await usersRepository.findOne(id);

        if(!user) {
            throw new AppError('user not found.')
        }

        const usersExists = await usersRepository.findByName(name);

        if(usersExists && name != user.name) {
            throw new AppError('There is already one user with this name');
        }

        user.name = name;

        await usersRepository.save(user);

        return user;
    }
}

export default UpdateUserService;
