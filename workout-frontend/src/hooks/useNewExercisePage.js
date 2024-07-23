import { useMutation } from '@tanstack/react-query';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';

import ExerciseService from '../services/exercise.service';

export default function useNewExercisePage() {
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
		['createExercise'],
		body => ExerciseService.create(body),
		{
			onSuccess: () => {
				reset();
			}
		}
	);

	const onSubmit = data => {
		mutate(data);
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
		[errors, isLoading]
	);
}
