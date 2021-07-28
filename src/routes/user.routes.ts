import { Router } from 'express';
import { createUserController } from 'src/useCases/CreateUser';

const userRouter = Router();

userRouter.post('/',
  (request, response) => createUserController.handle(request, response));

export { userRouter };
