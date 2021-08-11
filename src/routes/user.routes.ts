import { Router } from 'express';
import { authenticateUserController } from 'src/useCases/authUser';
import { createUserController } from 'src/useCases/createUser';
import { refreshTokenUserController } from 'src/useCases/refreshTokenUser';

const userRouter = Router();

userRouter.post('/',
  (request, response) => createUserController.handle(request, response));

userRouter.post('/login',
  (request, response) => authenticateUserController.handle(request, response));

userRouter.post('/refresh-token',
  (request, response) => refreshTokenUserController.handle(request, response));

export { userRouter };
