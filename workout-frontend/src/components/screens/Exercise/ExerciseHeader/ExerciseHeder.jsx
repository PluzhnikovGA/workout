import cn from 'clsx';

import Header from '../../../Layout/Header/Header';
import stylesLayout from '../../../Layout/Layout.module.scss';
import styles from '../Exercise.module.scss';

export default function ExerciseHeader({ exerciseLog, isSuccess }) {
	return (
		<div
			className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
			style={{ backgroundImage: `url(/images/ex-bg.jpg)`, height: 300 }}
		>
			<Header
				backLink={
					isSuccess ? `/workouts/${exerciseLog.workoutLog}` : '/workouts'
				}
			/>

			{isSuccess && (
				<div className={styles.header}>
					<img
						src={
							import.meta.env.VITE_SERVER_URL + exerciseLog.exercise.iconPath
						}
						height='34'
						alt=''
						draggable={false}
					/>
					<h1 className={stylesLayout.heading}>{exerciseLog.exercise.name}</h1>
				</div>
			)}
		</div>
	);
}
