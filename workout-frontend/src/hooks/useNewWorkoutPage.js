import { useMutation } from '@tanstack/react-query';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';

import WorkoutService from '../services/workout.service';

export default function useNewWorkoutPage() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		control
	} = useForm({
		mode: 'onChange'
	});

	const { mutate, isSuccess, isError, isLoading, error } = useMutation(
		['createWorkout'],
		body => WorkoutService.create(body),
		{
			onSuccess: () => {
				reset({
					name: '',
					exerciseIds: []
				});
			}
		}
	);

	const onSubmit = data => {
		mutate({
			name: data.name,
			exerciseIds: data.exerciseIds.map(ex => ex.value)
		});
	};

	return useMemo(
		() => ({
			register,
			handleSubmit,
			errors,
			control,
			isSuccess,
			isError,
			isLoading,
			error,
			onSubmit
		}),
		[errors, isLoading, error]
	);
}
