import { useQuery } from '@tanstack/react-query';
import cn from 'clsx';
import { useParams } from 'react-router-dom';

import WorkoutLogService from '../../../services/workoutLog.service';
import Header from '../../Layout/Header/Header';
import stylesLayout from '../../Layout/Layout.module.scss';

import styles from './Workouts.module.scss';

export default function Workout() {
	const { id } = useParams();

	const { data: workoutLog, isSuccess } = useQuery(
		['getWorkoutLog', id],
		() => WorkoutLogService.getById(id),
		{
			select: ({ data }) => data
		}
	);

	return (
		<>
			<div
				className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
				style={{ backgroundImage: `url(/images/workout-bg.jpg)`, height: 356 }}
			>
				<Header backLink='/workouts' />

				{isSuccess && (
					<div>
						<time className={styles.time}>{workoutLog.minutes + ' min.'}</time>
						<h1 className={stylesLayout.heading}>{workoutLog.workout.name}</h1>
					</div>
				)}
			</div>
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<div style={{ width: '90%', margin: '0 auto' }}></div>
			</div>
		</>
	);
}
