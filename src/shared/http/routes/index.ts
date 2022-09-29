import universitysRouter from '@modules/universities/routes/universities.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/universities', universitysRouter);

export default routes;
