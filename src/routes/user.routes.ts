import { Router } from 'express';
import { authenticateUserController } from 'src/useCases/authUser';
import { createUserController } from 'src/useCases/createUser';

const userRouter = Router();

userRouter.post('/',
  (request, response) => createUserController.handle(request, response));

userRouter.post('/login',
  (request, response) => authenticateUserController.handle(request, response));

export { userRouter };
