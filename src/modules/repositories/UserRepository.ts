import { User } from './../entities/User';
import { AppDataSource } from '@shared/infra/typeorm/data-source';

export const userRepository = AppDataSource.getRepository(User).extend({
  findByName(name: string){
    const user = this.findOne({
      where: {
        name,
      }
    });
    return user
  },

  findById(id: string){
    const user = this.findOne({
      where: {
        id,
      }
    });
    return user
  }
})
