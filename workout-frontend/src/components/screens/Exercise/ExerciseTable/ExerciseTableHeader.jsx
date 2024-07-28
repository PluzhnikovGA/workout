import styles from '../Exercise.module.scss';

const titles = ['Previous', 'Weight & Repeat', 'Completed'];

export default function ExerciseTableHeader() {
	return (
		<div className={styles.row}>
			{titles.map((title, index) => (
				<div className={styles.row} key={`title-${index}`}>
					<span>{title}</span>
				</div>
			))}
		</div>
	);
}
