import { EntityRepository, Repository } from "typeorm";
import { Dentistry } from '../entities/Dentistry'

@EntityRepository(Dentistry)
export class DentistryRepository extends Repository<Dentistry> {

  public async findByName(name: string){
    const dentistry = this.findOne({
      where: {
        name,
      }
    });

    return dentistry;
  }
}