import { useQuery } from '@tanstack/react-query';

import ExerciseService from '../services/exercise.service';

export default function useListExercises() {
	return useQuery(['listExercises'], () => ExerciseService.getAll(), {
		select: ({ data }) => data
	});
}
