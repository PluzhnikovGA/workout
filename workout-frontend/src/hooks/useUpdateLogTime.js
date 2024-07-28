import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import ExerciseLogService from '../services/exerciseLog.service';

export default function useUpdateLogTime() {
	const { id } = useParams();

	const queryClient = useQueryClient();

	const { mutate, error: errorChange } = useMutation(
		['updateLogTime'],
		({ timeId, body }) => {
			ExerciseLogService.updateTime(timeId, body);
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries(['getExerciseLog', id]);
			}
		}
	);

	return { updateTime: mutate, errorChange };
}
