import cn from 'clsx';

import styles from '../Exercise.module.scss';

export default function ExerciseTableRow({
	item,
	onChangeState,
	toggleTime,
	getState
}) {
	return (
		<>
			<div
				className={cn(styles.row, {
					[styles.completed]: item.isCompleted
				})}
				key={`${item}`}
			>
				<div className={styles.opacity}>
					<input type='number' defaultValue={item.prevWeigh} disabled />
					<i>kg{item.isCompleted ? '' : ' '}/</i>
					<input type='number' defaultValue={item.prevRepeat} disabled />
				</div>

				<div key={`RepeatWeight ${item.id}/${item.weight}`}>
					<input
						type='number'
						value={getState(item.id, 'weight')}
						onChange={e => onChangeState(item.id, 'weight', e.target.value)}
						disabled={item.isCompleted}
					/>
					<i>kg{item.isCompleted ? '' : ' '}/</i>
					<input
						type='number'
						value={getState(item.id, 'repeat')}
						onChange={e => onChangeState(item.id, 'repeat', e.target.value)}
						disabled={item.isCompleted}
					/>
				</div>

				<div key={`Completed ${item.id}/${item.isCompleted}`}>
					<img
						src={
							getState(item.id, 'isCompleted')
								? '/images/exercises/check-completed.svg'
								: '/images/exercises/check.svg'
						}
						className={styles.checkbox}
						alt=''
						onClick={() => {
							toggleTime(item.id, !getState(item.id, 'isCompleted'));
						}}
					/>
				</div>
			</div>
		</>
	);
}
