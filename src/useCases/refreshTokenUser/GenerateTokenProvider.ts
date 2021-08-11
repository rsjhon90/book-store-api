import * as jwt from 'jsonwebtoken';

import authconfig from '@config/auth';

export class GenerateTokenProvider {
  execute(userId: string): string {
    const { secret, expiresIn } = authconfig.jwtInfo;
    const token = jwt.sign({}, secret,
      {
        subject: userId,
        expiresIn,
      });

    return token;
  }
}
