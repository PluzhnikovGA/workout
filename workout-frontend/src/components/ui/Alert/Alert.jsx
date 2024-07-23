import cn from 'clsx';

import styles from './Alert.module.scss';

export default function Alert({ type = 'success', text }) {
	return <div className={cn(styles.alert, styles[type])}>{text}</div>;
}
