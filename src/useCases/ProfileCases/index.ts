import {
  PostgresProfilesRepository,
} from '@repositories/implementations/PostgresProfilesRepository';
import {
  PostgresUsersRepository,
} from '@repositories/implementations/PostgresUsersRepository';
import { CreateProfileUseCase } from './CreateProfileUseCase';
import { CreateProfileController } from './CreateProfileController';

const postgresProfilesRepository = new PostgresProfilesRepository();
const postgresUsersRepository = new PostgresUsersRepository();

const createProfileUseCase = new CreateProfileUseCase(
  postgresProfilesRepository,
  postgresUsersRepository,
);

const createProfileController = new CreateProfileController(
  createProfileUseCase,
);

export { createProfileUseCase, createProfileController };
