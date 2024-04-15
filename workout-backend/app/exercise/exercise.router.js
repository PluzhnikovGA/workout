import express from 'express';
import { protect } from '../middleware/auth.middleware.js';
import { createNewExercise, deleteExercise, getExercises, updateExercise } from './exercise.controller.js';
import { createNewExerciseLog } from './log/exerciseLog.controller.js';

const router = express.Router();

router.route('/').get(protect, getExercises).post(protect, createNewExercise);

router.route('/:id').put(protect, updateExercise).delete(protect, deleteExercise);

router.route("/log/:exerciseId").post(protect, createNewExerciseLog);

export default router;
