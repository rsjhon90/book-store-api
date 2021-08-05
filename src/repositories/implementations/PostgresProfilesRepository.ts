import { Profile } from '@models/Profile';
import { IProfilesRepository } from '@repositories/IProfilesRepository';
import { getRepository } from 'typeorm';

export class PostgresProfilesRepository implements IProfilesRepository {
  async save(data: Profile): Promise<Profile> {
    const profilesRepository = getRepository(Profile);

    const newProfile = await profilesRepository.save(data);

    const profile = await this.findById(newProfile.profileId);

    return profile;
  }

  async findByPhone(phone: string): Promise<Profile> {
    const profilesRepository = getRepository(Profile);

    const profile = await profilesRepository.findOne({
      where: { phone },
      relations: ['user'],
    });

    return profile;
  }

  async findById(profileId: string): Promise<Profile> {
    const profilesRepository = getRepository(Profile);

    const profile = await profilesRepository.findOne({
      where: { profileId },
      relations: ['user'],
    });

    return profile;
  }
}
