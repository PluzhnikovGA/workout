import cn from 'clsx';

import Header from '../../../Layout/Header/Header';
import stylesLayout from '../../../Layout/Layout.module.scss';
import styles from '../Workouts.module.scss';

export default function WorkoutHeader({ workoutLog, isSuccess }) {
	return (
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
	);
}
