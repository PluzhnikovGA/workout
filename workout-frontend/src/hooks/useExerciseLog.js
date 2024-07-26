import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import ExerciseLogService from '../services/exerciseLog.service';

export default function useExerciseLog() {
	const { id } = useParams();

	const {
		data: exerciseLog,
		isSuccess,
		isLoading
	} = useQuery(['getExerciseLog', id], () => ExerciseLogService.getById(id), {
		select: ({ data }) => data
	});

	return useMemo(
		() => ({
			exerciseLog,
			isSuccess,
			isLoading
		}),
		[isLoading]
	);
}
