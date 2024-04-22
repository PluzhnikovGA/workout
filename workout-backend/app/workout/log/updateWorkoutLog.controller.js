import asyncHandler from 'express-async-handler';

import { prisma } from '../../prisma.js';

// @desc    Update status of complete workout log
// @route   PATCH /api/workout/log/complete/:id
// @access  Private
export const updateCompleteWorkoutLog = asyncHandler(async (req, res) => {
	try {
		const workoutLog = await prisma.workoutLog.update({
			where: {
				id: +req.params.id
			},
			data: {
				isCompleted: true
			}
		});

		res.json(workoutLog);
	} catch (error) {
		res.status(404);
		throw new Error('Workout log not found');
	}
});
