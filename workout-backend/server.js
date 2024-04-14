import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import 'colors';
import path from 'path';
import authRoutes from './app/auth/auth.routes.js';
import userRoutes from './app/user/user.routes.js';
import exerciseRoutes from './app/exercise/exercise.routes.js';
import workoutRoutes from './app/workout/workout.routes.js';
import { prisma } from './app/prisma.js';
import { errorHandler, notFound } from './app/middleware/error.middleware.js';

dotenv.config();

const app = express();
const __dirname = path.resolve();

async function main() {
  if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

  app.use(express.json());

  app.use('/uploads', express.static(path.join(__dirname, '/uploads/')));

  app.use('/api/auth', authRoutes);
  app.use('/api/user', userRoutes);
  app.use('/api/exercise', exerciseRoutes);
  app.use('/api/workout', workoutRoutes);

  app.use(notFound);
  app.use(errorHandler);

  const PORT = process.env.PORT || 6000;

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
