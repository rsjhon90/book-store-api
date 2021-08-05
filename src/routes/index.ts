import { Router } from 'express';
import { ensureAuthenticated } from 'src/middlewares/ensureAuthenticated';
import { profileRouter } from './profile.routes';
import { userRouter } from './user.routes';

const router = Router();

router.get('/test', ensureAuthenticated, (request, response) => response.json({
  name: 'Jony',
  address: 'Rua X',
}));

router.use('/user', userRouter);
router.use('/profile', ensureAuthenticated, profileRouter);

export { router };
