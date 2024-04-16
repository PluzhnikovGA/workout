import { prisma } from "../prisma.js";
import asyncHandler from "express-async-handler";
import { UserFields } from "../utils/user.utils.js";
import { calculateMinutes } from "../utils/calculateMinutes.utils.js";

// @desc Get user profile
// @route GET /api/user/profile
// @access Private
export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.user.id,
    },
    select: UserFields,
  });

  const countExerciseTimesCompleted = await prisma.exerciseLog.count({
    where: {
      userId: req.user.id,
      isCompleted: true,
    }
  });

  const kgs = await prisma.exerciseTime.aggregate({
    where: {
      exerciseLog: {
        userId: req.user.id,
      },
      isCompleted: true,
    },
    _sum: {
      weight: true
    }
  });

  const workouts = await prisma.workoutLog.count({
    where: {
      userId: req.user.id,
      isCompleted: true,
    },
  });

  res.json({
    user,
    statistic: [
      {
        label: "Minutes",
        value: calculateMinutes(countExerciseTimesCompleted) || 0,
      },
      {
        label: "Workouts",
        value: workouts,
      },
      {
        label: "Kgs",
        value: kgs._sum.weight || 0,
      },
    ]
  });
});
