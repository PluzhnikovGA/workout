import Alert from '../../ui/Alert/Alert';
import Loader from '../../ui/Loader/Loader';

import useExerciseLog from '../../../hooks/useExerciseLog';

import styles from './Exercise.module.scss';
import ExerciseHeader from './ExerciseHeader/ExerciseHeder';
// import ExerciseError from './ExerciseError/ExerciseError';
import ExerciseTableHeader from './ExerciseTable/ExerciseTableHeader';
import ExerciseTableRow from './ExerciseTable/ExerciseTableRow';

export default function Exercise() {
	const { exerciseLog, isSuccess, isLoading } = useExerciseLog();

	return (
		<>
			<ExerciseHeader isSuccess={isSuccess} exerciseLog={exerciseLog} />
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<div style={{ width: '90%', margin: '0 auto' }}>
					{/* <ExerciseError errors={[errorChange, errorCompleted]}/> */}
				</div>
				{isLoading ? (
					<Loader />
				) : (
					<div className={styles.wrapper}>
						<ExerciseTableHeader />
						{exerciseLog?.times.map((item, index) => (
							<ExerciseTableRow key={`row-${index}`} item={item} />
						))}
					</div>
				)}

				{isSuccess && exerciseLog?.times?.length === 0 && (
					<Alert type='warning' text='Times not found' />
				)}
			</div>
		</>
	);
}
