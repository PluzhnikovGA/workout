import asyncHandler from 'express-async-handler';
import { prisma } from '../prisma.js';

const AVERAGE_EXERCISE_DURATION = 3.7;

// @desc    Get workout
// @route 	PUT /api/workout/:id
// @access  Private
export const getWorkout = asyncHandler(async (req, res) => {
  try {
    const workout = await prisma.workout.findUnique({
      where: {
        id: +req.params.id,
      },
      include: {
        exercises: true,
      },
    });

    const minutes = Math.ceil(workout.exercises.length * AVERAGE_EXERCISE_DURATION);

    res.json({ ...workout, minutes });
  } catch (error) {
    res.status(404);
    throw new Error('Workout not found');
  };
});

// @desc    Get workouts
// @route   GET /api/workout
// @access  Private
export const getWorkouts = asyncHandler(async (req, res) => {
	const workouts = await prisma.workout.findMany({
    orderBy: {
      createAt: 'desc',
    },
    include: {
      exercises: true,
    },
  });

	res.json(workouts);
});


// @desc    Create new workout
// @route 	POST /api/workout
// @access  Private
export const createNewWorkout = asyncHandler(async (req, res) => {
	const { name, exerciseIds } = req.body;
	const workout = await prisma.workout.create({
		data: {
			name,
			exercises: {
        connect: exerciseIds.map(id => ({ id: +id })),
      },
		},
	});

	res.json(workout);
});

// @desc    Update workout
// @route 	PUT /api/workout/:id
// @access  Private
export const updateWorkout = asyncHandler(async (req, res) => {
	const { name, exerciseIds } = req.body;

  try {
    const workout = await prisma.workout.update({
      where: {
        id: +req.params.id
      },
      data: {
        name,
        exercises: {
          set: exerciseIds.map(id => ({ id: +id })),
        },
      },
      include: {
        exercises: true,
      },
    });

    res.json(workout);
  } catch (error) {
    res.status(404);
    throw new Error('Workout not found');
  };
});

// @desc    Delete workout
// @route 	DELETE /api/workout/:id
// @access  Private
export const deleteWorkout = asyncHandler(async (req, res) => {
  try {
    await prisma.workout.delete({
      where: {
        id: +req.params.id,
      },
    });

    res.json({message: 'Workout deleted'});
  } catch (error) {
    res.status(404);
    throw new Error('Workout not found');
  };
});
