import asyncHandler from 'express-async-handler';

import { prisma } from '../../prisma.js';

import { addPrevValues } from './utils/addPrevValues.utils.js';

// @desc    Get exerciseLog
// @route   GET /api/exercise/log/:id
// @access  Private
export const getExerciseLog = asyncHandler(async (req, res) => {
	const exerciseLog = await prisma.exerciseLog.findUnique({
		where: {
			id: +req.params.id
		},
		include: {
			exercise: true,
			times: {
				orderBy: {
					id: 'asc'
				}
			}
		}
	});

	if (!exerciseLog) {
		res.status(404);
		throw new Error('Exercise not found!');
	}

	const prevExerciseLog = await prisma.exerciseLog.findFirst({
		where: {
			exerciseId: exerciseLog.exerciseId,
			userId: req.user.id,
			isCompleted: true
		},
		orderBy: {
			createAt: 'desc'
		},
		include: {
			times: true
		}
	});

	res.json({
		...exerciseLog,
		times: addPrevValues(exerciseLog, prevExerciseLog)
	});
});
