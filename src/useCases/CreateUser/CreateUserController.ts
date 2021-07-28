import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      email, password, isAdmin, isAuthor,
    } = request.body;

    await this.createUserUseCase.execute({
      email,
      password,
      isAdmin,
      isAuthor,
    });

    return response.status(201).send();
  }
}
