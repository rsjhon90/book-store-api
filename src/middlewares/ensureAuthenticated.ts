import { AppError } from '@errors/AppError';
import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import authConfig from '@config/auth';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export function ensureAuthenticated(
  request: Request, response: Response, next: NextFunction,
): void {
  const authToken = request.headers.authorization;

  if (!authToken) {
    throw new AppError('Token is missing.', 401);
  }

  // return authToken = "BearerTokenNumber"
  const [, token] = authToken.split(' ');

  try {
    const decoded = jwt.verify(token, authConfig.jwtInfo.secret);

    const { sub } = decoded as TokenPayload;

    request.user = {
      id: sub,
    };

    return next();
  } catch {
    throw new AppError('Invalid JWT.', 401);
  }
}
