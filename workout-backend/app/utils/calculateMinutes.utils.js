const AVERAGE_EXERCISE_DURATION = 3.7;

export const calculateMinutes = length => Math.ceil(length * AVERAGE_EXERCISE_DURATION);
