import { useMutation, useQuery } from '@tanstack/react-query';
import { Fragment } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Loader from '../../ui/Loader/Loader';

import WorkoutLogService from '../../../services/workoutLog.service';

import ExerciseItem from './ExerciseItem/ExerciseItem';
import styles from './Workout.module.scss';
import WorkoutHeader from './WorkoutHeader/WorkoutHeader';
import Button from '../../ui/Button/Button';

export default function Workout() {
	const { id } = useParams();

	const {
		data: workoutLog,
		isSuccess,
		isLoading
	} = useQuery(['getWorkoutLog', id], () => WorkoutLogService.getById(id), {
		select: ({ data }) => data
	});

  const navigate = useNavigate();

  const {mutate} = useMutation(['completeWorkout'], () => WorkoutLogService.complete(id), {
    onSuccess() {
      navigate('/workouts');
    }
  })

	return (
		<>
			<WorkoutHeader isSuccess={isSuccess} workoutLog={workoutLog} />
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<div style={{ width: '90%', margin: '0 auto' }}></div>
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
        <Button clickHandler={() => mutate()}>Complete workout</Button>
			</div>
		</>
	);
}
