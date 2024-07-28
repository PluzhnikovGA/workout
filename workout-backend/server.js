import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import 'colors';
import path from 'path';
import cors from 'cors';
import authRouter from './app/auth/auth.router.js';
import userRouter from './app/user/user.router.js';
import exerciseRouter from './app/exercise/exercise.router.js';
import workoutRouter from './app/workout/workout.router.js';
import { prisma } from './app/prisma.js';
import { errorHandler, notFound } from './app/middleware/error.middleware.js';

dotenv.config();

const app = express();
const __dirname = path.resolve();

async function main() {
  if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

  app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));

  app.use(express.json());

  app.use('/uploads', express.static(path.join(__dirname, '/uploads/')));

  app.use('/api/auth', authRouter);
  app.use('/api/user', userRouter);
  app.use('/api/exercise', exerciseRouter);
  app.use('/api/workout', workoutRouter);

  app.use(notFound);
  app.use(errorHandler);

  const PORT = process.env.PORT || 3000;

  app.listen(
    PORT,
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on
      port ${PORT}`.green.bold
    )
  )
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
