import dayjs from 'dayjs';
import { RefreshToken } from '@models/RefreshToken';
import { IRefreshTokenRepository } from '@repositories/IRefreshTokenRepository';

export class GenerateRefreshTokenProvider {
  constructor(
    private refreshTokenRepository: IRefreshTokenRepository,
  ) {}

  async execute(userId: string): Promise<RefreshToken> {
    const refreshTokenAlreadyExists = await this.refreshTokenRepository
      .findByUserId(userId);

    if (refreshTokenAlreadyExists) {
      await this.refreshTokenRepository.deleteByUserId(userId);
    }

    const expiresIn = dayjs().add(40, 'seconds').unix();

    const refreshToken = new RefreshToken({
      expiresIn,
      userId,
    });

    const generatedRefreshToken = await this
      .refreshTokenRepository.save(refreshToken);

    return generatedRefreshToken;
  }
}
