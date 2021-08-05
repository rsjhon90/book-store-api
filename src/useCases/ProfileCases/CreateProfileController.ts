import { Request, Response } from 'express';
import { CreateProfileUseCase } from './CreateProfileUseCase';

export class CreateProfileController {
  constructor(
    private createProfileUseCase: CreateProfileUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      phone,
      address,
    } = request.body;

    const profile = await this.createProfileUseCase.execute({
      name,
      userId: request.user.id,
      phone,
      address,
    });

    return response.status(201).json(profile);
  }
}
