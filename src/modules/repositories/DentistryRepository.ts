import { Dentistry } from './../entities/Dentistry';
import { AppDataSource } from '@shared/infra/typeorm/data-source';

export const dentistryRepository = AppDataSource.getRepository(Dentistry).extend({
  findByName(name: string){
    const dentistry = this.findOne({
      where: {
        name,
      }
    });
    return dentistry
  }
})
