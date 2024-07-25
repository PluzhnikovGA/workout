import Alert from '../../ui/Alert/Alert';
import Loader from '../../ui/Loader/Loader';

import useWorkouts from '../../../hooks/useWorkouts';

import Layout from '../../Layout/Layout';

import styles from './ListWorkouts.module.scss';
import WorkoutItem from './WorkoutItem/WorkoutItem';

export default function ListWorkouts() {
	const {
		data,
		isSuccess,
		mutate,
		isLoading,
		isSuccessMutate,
		error,
		isError
	} = useWorkouts();

	return (
		<>
			<Layout bgImage='/images/workout-bg.jpg' heading='Workout list' />
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				{isError && <Alert type='error' text={error} />}
				{isSuccessMutate && <Alert text='Workout log created successfully' />}
				{isLoading && <Loader />}
				{isSuccess && (
					<div className={styles.wrapper}>
						{data.map(workout => (
							<WorkoutItem key={workout.id} workout={workout} mutate={mutate} />
						))}
					</div>
				)}

				{isSuccess && data?.length === 0 && (
					<Alert type='warning' text='Workouts not found' />
				)}
			</div>
		</>
	);
}
