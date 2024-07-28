import { useQuery } from '@tanstack/react-query';
import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import ExerciseLogService from '../services/exerciseLog.service';

import useUpdateLogTime from './useUpdateLogTime';

export default function useExerciseLog() {
	const { id } = useParams();

	const [times, setTimes] = useState([]);

	const { updateTime, error } = useUpdateLogTime(times);

	const {
		data: exerciseLog,
		isSuccess,
		isLoading
	} = useQuery(['getExerciseLog', id], () => ExerciseLogService.getById(id), {
		select: ({ data }) => data,
		onSuccess(data) {
			if (data?.times?.length) setTimes(data.times);
		}
	});

	const onChangeState = (timeId, key, value) => {
		const newTimes = times.map(time => {
			if (time.id === timeId) {
				return { ...time, [key]: value };
			}

			return time;
		});

		setTimes(newTimes);
	};

	const getState = (timeId, key) => {
		const time = getTime(timeId);
		return time ? time[key] : key === 'isCompleted' ? false : 0;
	};

	const getTime = timeId => {
		return times.find(time => time.id === timeId);
	};

	const toggleTime = (timeId, isCompleted) => {
		const time = getTime(timeId);
		updateTime({
			timeId,
			body: { isCompleted, repeat: +time.repeat, weight: +time.weight }
		});
	};

	return useMemo(
		() => ({
			exerciseLog,
			isSuccess,
			isLoading,
			onChangeState,
			getTime,
			toggleTime,
			error,
			getState
		}),
		[isLoading, onChangeState, toggleTime]
	);
}
