import 'reflect-metadata';
import 'dotenv/config';
import express, { Express, NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import routes from '@shared/http/routes';
import AppError from '@shared/errors/AppError';
import '@shared/mongoose';
import { errors } from 'celebrate';
import rateLimiter from '@shared/http/middlewares/rateLimiter';

class App {
  public server: Express;

  constructor() {
    this.server = express();
    this.config();
    this.routes();
    this.middlewaresErrors();
  }

  config() {
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(rateLimiter);
  }

  middlewaresErrors() {
    this.server.use(errors());

    this.server.use(
      (
        error: Error,
        request: Request,
        response: Response,
        next: NextFunction,
      ) => {
        if (error instanceof AppError) {
          return response.status(error.statusCode).json({
            status: 'error',
            message: error.message,
          });
        }

        return response.status(500).json({
          status: 'error',
          message: 'Internal server error',
        });
      },
    );
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
