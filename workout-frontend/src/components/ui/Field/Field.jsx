import styles from './Field.module.scss';

export default function Field({ register, name, options, error, ...rest }) {
	return (
		<div className={styles.wrapper}>
			<input {...register(name, options)} {...rest} className={styles.input} />
			{error && <div className={styles.error}>{error}</div>}
		</div>
	);
}
