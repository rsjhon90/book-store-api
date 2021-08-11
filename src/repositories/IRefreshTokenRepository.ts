import { RefreshToken } from '@models/RefreshToken';

export interface IRefreshTokenRepository {
  findById(refreshId: string): Promise<RefreshToken>;
  save(data: RefreshToken): Promise<RefreshToken>;
  findByUserId(userId: string): Promise<RefreshToken>;
  deleteByUserId(userId: string): Promise<void>;
}
