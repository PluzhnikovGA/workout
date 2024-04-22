import express from 'express';

import { protect } from '../middleware/auth.middleware.js';

import {
	createNewExercise,
	deleteExercise,
	getExercises,
	updateExercise
} from './exercise.controller.js';
import { createNewExerciseLog } from './log/exerciseLog.controller.js';
import { getExerciseLog } from './log/getExerciseLog.controller.js';
import {
	updateCompleteExerciseLog,
	updateExerciseLogTime
} from './log/updateExerciseLog.controller.js';

const router = express.Router();

router.route('/').get(protect, getExercises).post(protect, createNewExercise);

router
	.route('/:id')
	.put(protect, updateExercise)
	.delete(protect, deleteExercise);

router
	.route('/log/:id')
	.get(protect, getExerciseLog)
	.post(protect, createNewExerciseLog);

router.route('/log/time/:id').put(protect, updateExerciseLogTime);

router.route('/log/complete/:id').patch(protect, updateCompleteExerciseLog);

export default router;
