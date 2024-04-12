import { prisma } from "../prisma.js";
import asyncHandler from "express-async-handler";
import { UserFields } from "../utils/user.utils.js";

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

  res.json(user);
});
