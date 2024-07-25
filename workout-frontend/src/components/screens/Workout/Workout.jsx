import { useQuery } from '@tanstack/react-query';
import { Fragment } from 'react';
import { useParams } from 'react-router-dom';

import Loader from '../../ui/Loader/Loader';

import WorkoutLogService from '../../../services/workoutLog.service';

import ExerciseItem from './ExerciseItem/ExerciseItem';
import WorkoutHeader from './WorkoutHeader/WorkoutHeader';
import styles from './Workouts.module.scss';

export default function Workout() {
	const { id } = useParams();

	const {
		data: workoutLog,
		isSuccess,
		isLoading
	} = useQuery(['getWorkoutLog', id], () => WorkoutLogService.getById(id), {
		select: ({ data }) => data
	});

	return (
		<>
			<WorkoutHeader isSuccess={isSuccess} workoutLog={workoutLog} />
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<div style={{ width: '90%', margin: '0 auto' }}></div>
			</div>
			{isLoading ? (
				<Loader />
			) : (
				<div className={styles.wrapper}>
					{workoutLog?.exerciseLogs?.map((exerciseLog, index) => (
						<Fragment key={`${exerciseLog.id}`}>
							<ExerciseItem exerciseLog={exerciseLog} />
							{index % 2 !== 0 &&
								index !== workoutLog.exerciseLogs.length - 1 && (
									<div className={styles.line} />
								)}
						</Fragment>
					))}
				</div>
			)}
		</>
	);
}
