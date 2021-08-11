import {
  PostgresRefreshTokenRepository,
} from '@repositories/implementations/PostgresRefreshTokenRepository';
import { GenerateTokenProvider } from './GenerateTokenProvider';
import { GenerateRefreshTokenProvider } from './GenerateRefreshTokenProvider';
import { RefreshTokenUserUseCase } from './RefreshTokenUserUseCase';
import { RefreshTokenUserController } from './RefreshTokenUserController';

const postgresRefreshTokenRepository = new PostgresRefreshTokenRepository();

const generateTokenProvider = new GenerateTokenProvider();
const generateRefreshTokenProvider = new GenerateRefreshTokenProvider(
  postgresRefreshTokenRepository,
);

const refreshTokenUserUseCase = new RefreshTokenUserUseCase(
  postgresRefreshTokenRepository,
  generateTokenProvider,
  generateRefreshTokenProvider,
);

const refreshTokenUserController = new RefreshTokenUserController(
  refreshTokenUserUseCase,
);

export {
  generateTokenProvider,
  generateRefreshTokenProvider,
  refreshTokenUserUseCase,
  refreshTokenUserController,
};
