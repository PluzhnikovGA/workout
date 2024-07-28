import { useMutation } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';

import ExerciseLogService from '../services/exerciseLog.service';

export default function useCompleteLog() {
	const { id } = useParams();

	const navigate = useNavigate();

	const { mutate, error: errorCompleted } = useMutation(
		['completeLog'],
		body => ExerciseLogService.complete(id, body),
		{
			onSuccess: ({ data }) => {
				navigate(`/workouts/${data.workoutLogId}`);
			}
		}
	);

	return { completedLog: mutate, errorCompleted };
}
