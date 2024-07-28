import { useMutation, useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import WorkoutService from '../services/workout.service';
import WorkoutLogService from '../services/workoutLog.service';

export default function useWorkouts() {
	const navigate = useNavigate();

	const { data, isSuccess } = useQuery(
		['getWorkouts'],
		() => WorkoutService.getAll(),
		{
			select: ({ data }) => data
		}
	);

	const {
		mutate,
		isLoading,
		isSuccess: isSuccessMutate,
		error,
		isError
	} = useMutation(
		['CreateNewWorkoutLog'],
		workoutId => WorkoutLogService.create(workoutId),
		{
			onSuccess({ data }) {
				navigate(`/workouts/${data.id}`);
			}
		}
	);

	return useMemo(
		() => ({
			data,
			isSuccess,
			mutate,
			isLoading,
			isSuccessMutate,
			error,
			isError
		}),
		[isLoading, error, data]
	);
}
