import cn from 'clsx';

import styles from './Button.module.scss';

export default function Button({ children, clickHandler = null, size = 'xl' }) {
	return (
		<div className={styles.wrapper}>
			<button
				className={cn(styles.button, styles[size])}
				onClick={clickHandler}
			>
				{children}
			</button>
		</div>
	);
}
