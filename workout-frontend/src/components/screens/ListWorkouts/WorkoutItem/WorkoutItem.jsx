import styles from '../ListWorkouts.module.scss';

export default function WorkoutItem({ workout, mutate }) {
	return (
		<div className={styles.item}>
			<button
				aria-label='Create new workout'
				onClick={() => mutate(workout.id)}
			>
				<span>{workout.name}</span>
			</button>
		</div>
	);
}
