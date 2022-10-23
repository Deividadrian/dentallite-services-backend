import AppError from '@shared/errors/AppErros';
import { UserRepository } from '../typeorm/repositories/UserRepository';
import { getCustomRepository } from "typeorm";
import User from '../typeorm/entities/User';

interface IResquest {
    id: string;
}

class ShowUserService {
    public async execute({id}: IResquest): Promise<User | undefined> {
        const userRepository = getCustomRepository(UserRepository);

        const user = await userRepository.findOne(id);

        if(!user) {
            throw new AppError('user not found.')
        }

        return user;
    }
}

export default ShowUserService;
