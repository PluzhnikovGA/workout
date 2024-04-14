import express from 'express';
import { protect } from '../middleware/auth.middleware.js';
import { createNewWorkout, getWorkout, deleteWorkout, updateWorkout, getWorkouts } from './workout.controller.js';

const router = express.Router();

router.route('/').get(protect, getWorkouts).post(protect, createNewWorkout);
router.route('/:id').get(protect, getWorkout).put(protect, updateWorkout).delete(protect, deleteWorkout);

export default router;
