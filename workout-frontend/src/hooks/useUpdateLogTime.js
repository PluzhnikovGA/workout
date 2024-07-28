import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import ExerciseLogService from '../services/exerciseLog.service';

import useCompleteLog from './useCompleteLog';

export default function useUpdateLogTime(times) {
	const { id } = useParams();

	const queryClient = useQueryClient();

	const { completedLog, errorCompleted } = useCompleteLog();

	const { mutate, error: errorChange } = useMutation(
		['updateLogTime'],
		({ timeId, body }) => {
			ExerciseLogService.updateTime(timeId, body);
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries(['getExerciseLog', id]);
				const filteredTimes = times.filter(time => time.isCompleted);

				if (filteredTimes.length === times.length - 1) {
					completedLog({ isCompleted: true });
				}
			}
		}
	);

	return { updateTime: mutate, error: errorChange || errorCompleted };
}
