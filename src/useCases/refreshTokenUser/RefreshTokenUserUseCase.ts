import { IRefreshTokenRepository } from '@repositories/IRefreshTokenRepository';
import { AppError } from '@errors/AppError';
import { validate as isUuid } from 'uuid';
import dayjs from 'dayjs';
import { GenerateTokenProvider } from './GenerateTokenProvider';
import { GenerateRefreshTokenProvider } from './GenerateRefreshTokenProvider';
import { ITokenResponse } from './IRefreshTokenDTO';

export class RefreshTokenUserUseCase {
  constructor(
    private refreshTokenRepository: IRefreshTokenRepository,
    private generateTokenProvider: GenerateTokenProvider,
    private generateRefreshTokenProvider: GenerateRefreshTokenProvider,
  ) {}

  async execute(
    refreshToken: string,
  ): Promise<ITokenResponse | { token: string }> {
    if (!isUuid(refreshToken)) {
      throw new AppError('Invalid Refresh Token.');
    }

    const isValidRefreshToken = await this
      .refreshTokenRepository.findById(refreshToken);
    if (!isValidRefreshToken) {
      throw new AppError('Invalid Refresh Token.');
    }

    const refreshTokenExpired = dayjs()
      .isAfter(dayjs.unix(isValidRefreshToken.expiresIn));
    const token = this.generateTokenProvider.execute(
      isValidRefreshToken.userId,
    );

    if (refreshTokenExpired) {
      const { refreshId } = await this
        .generateRefreshTokenProvider.execute(isValidRefreshToken.userId);

      return { token, refreshToken: refreshId };
    }

    return { token };
  }
}
