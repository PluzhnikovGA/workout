import express from 'express';

import { protect } from '../middleware/auth.middleware.js';

import { getWorkoutLog } from './log/getWorkoutLog.controller.js';
import { updateCompleteWorkoutLog } from './log/updateWorkoutLog.controller.js';
import { createNewWorkoutLog } from './log/workoutLog.controller.js';
import {
	createNewWorkout,
	deleteWorkout,
	getWorkout,
	getWorkouts,
	updateWorkout
} from './workout.controller.js';

const router = express.Router();

router.route('/').get(protect, getWorkouts).post(protect, createNewWorkout);

router
	.route('/:id')
	.get(protect, getWorkout)
	.put(protect, updateWorkout)
	.delete(protect, deleteWorkout);

router
	.route('/log/:id')
	.get(protect, getWorkoutLog)
	.post(protect, createNewWorkoutLog);

router.route('/log/complete/:id').patch(protect, updateCompleteWorkoutLog);

export default router;
