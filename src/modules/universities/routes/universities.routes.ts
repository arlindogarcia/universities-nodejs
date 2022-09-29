import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import UniversityController from '@modules/universities/controllers/UniversityController';

const universitysRouter = Router();
const universityController = new UniversityController();

universitysRouter.get('/', universityController.index);

universitysRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.required(),
    },
  }),
  universityController.show,
);

universitysRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      alpha_two_code: Joi.string().max(2).required(),
      web_pages: Joi.array().items(Joi.string().required()).required(),
      name: Joi.string().required(),
      country: Joi.string().required(),
      domains: Joi.array().items(Joi.string().required()).required(),
      state_province: Joi.string(),
    },
  }),
  universityController.create,
);

universitysRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      web_pages: Joi.array().items(Joi.string().required()).required(),
      name: Joi.string().required(),
      domains: Joi.array().items(Joi.string().required()).required(),
    },
    [Segments.PARAMS]: {
      id: Joi.required(),
    },
  }),
  universityController.update,
);

universitysRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.required(),
    },
  }),
  universityController.delete,
);

export default universitysRouter;
