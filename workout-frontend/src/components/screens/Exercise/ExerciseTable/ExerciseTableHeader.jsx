import styles from '../Exercise.module.scss';

const titles = ['Previous', 'Repeat & Weight', 'Completed'];

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
