import { RefreshToken } from '@models/RefreshToken';
import { IRefreshTokenRepository } from '@repositories/IRefreshTokenRepository';
import { getRepository } from 'typeorm';

export class PostgresRefreshTokenRepository implements IRefreshTokenRepository {
  async findById(refreshId: string): Promise<RefreshToken> {
    const refreshTokenRepository = getRepository(RefreshToken);
    const refreshToken = await refreshTokenRepository.findOne(refreshId);

    return refreshToken;
  }

  async save(data: RefreshToken): Promise<RefreshToken> {
    const refreshTokenRepository = getRepository(RefreshToken);
    const refreshToken = await refreshTokenRepository.save(data);

    return refreshToken;
  }

  async findByUserId(userId: string): Promise<RefreshToken> {
    const refreshTokenRepository = getRepository(RefreshToken);
    const refreshToken = await refreshTokenRepository.findOne({
      where: { userId },
    });

    return refreshToken;
  }

  async deleteByUserId(userId: string): Promise<void> {
    const refreshTokenRepository = getRepository(RefreshToken);

    await refreshTokenRepository.delete({
      userId,
    });
  }
}
