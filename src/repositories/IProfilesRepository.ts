import { Profile } from '@models/Profile';

export interface IProfilesRepository {
  save(profile: Profile): Promise<Profile>;
  findByPhone(phone: string): Promise<Profile>;
  findById(profileId: string): Promise<Profile>;
}
