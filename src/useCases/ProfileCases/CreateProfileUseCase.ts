import { AppError } from '@errors/AppError';
import { Profile } from '@models/Profile';
import { IProfilesRepository } from '@repositories/IProfilesRepository';
import { IUsersRepository } from '@repositories/IUsersRepository';
import * as uuid from 'uuid';

import { ICreateProfileRequest, IProfileResponse } from './ProfileDTO';

export class CreateProfileUseCase {
  constructor(
    private profilesRepository: IProfilesRepository,
    private usersRepository: IUsersRepository,
  ) {}

  async execute({
    name,
    userId,
    phone,
    address,
  }: ICreateProfileRequest): Promise<IProfileResponse> {
    const isUuid = uuid.validate(userId);
    if (!isUuid) {
      throw new AppError('User does not Exists.', 404);
    }

    const userAlreadyExists = await this.usersRepository.findById(userId);
    if (!userAlreadyExists) {
      throw new AppError('User does not Exists.', 404);
    }

    const profileAlreadyExists = await this
      .profilesRepository.findByPhone(phone);
    if (profileAlreadyExists) {
      throw new AppError('phone is already in use');
    }

    const profile = await this.profilesRepository.save(new Profile({
      name,
      userId,
      phone,
      address,
      type: userAlreadyExists.isAuthor ? 'author' : 'client',
    }));

    return {
      name: profile.name,
      phone: profile.phone,
      address: profile.address,
      type: profile.type,
      email: profile.user.email,
    };
  }
}
