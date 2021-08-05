import { Router } from 'express';
import { createProfileController } from 'src/useCases/ProfileCases';

const profileRouter = Router();

profileRouter.post('/',
  (request, response) => createProfileController.handle(request, response));

export { profileRouter };
