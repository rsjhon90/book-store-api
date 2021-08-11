import { Request, Response } from 'express';
import { RefreshTokenUserUseCase } from './RefreshTokenUserUseCase';

export class RefreshTokenUserController {
  constructor(
    private refreshTokenUserUserCase: RefreshTokenUserUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { refreshToken } = request.body;

    const token = await this.refreshTokenUserUserCase.execute(refreshToken);

    return response.status(201).json(token);
  }
}
