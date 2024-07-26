import cn from 'clsx';

import styles from '../Exercise.module.scss';

export default function ExerciseTableRow({ item }) {
	return (
		<>
			<div
				className={cn(styles.row, {
					[styles.completed]: item.isCompleted
				})}
				key={`${item}`}
			>
				<div className={styles.opacity}>
					<input type='number' defaultValue={item.prevWeight} disabled />
					<i>kg{item.isCompleted && ' '}</i>
					<input type='number' defaultValue={item.prevRepeat} disabled />
				</div>

				<div key={`RepeatWeight ${item.id}/${item.weight}`}>
					<input type='tel' pattern='[0-9]*' disabled={item.isCompleted} />
					<i>kg{item.isCompleted && ' '}/</i>
					<input type='number' disabled={item.isCompleted} />
				</div>

				<div key={`Completed ${item.id}/${item.isCompleted}`}>
					<img
						src={'/images/exercises/check.svg'}
						className={styles.checkbox}
						alt=''
					/>
				</div>
			</div>
		</>
	);
}
