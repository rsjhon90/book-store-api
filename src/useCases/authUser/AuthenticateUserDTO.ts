import { RefreshToken } from '@models/RefreshToken';

export interface IAuthUserRequest {
  email: string;
  password: string;
}

export interface ITokenResponse {
  token: string;
  refreshToken: string
}
