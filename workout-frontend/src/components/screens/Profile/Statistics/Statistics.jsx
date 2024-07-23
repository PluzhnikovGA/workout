import useProfile from '../../../../hooks/useProfile';
import styles from './Statistics.module.scss';

export default function Statistics() {
  const { data } = useProfile();

  return <div className={styles.wrapper}>
    {data?.statistic.map(statistic => (
      <div key={statistic.label} className={styles.count}>
        <div className={styles.heading}>{statistic.label}</div>
        <div className={styles.number}>{statistic.value}</div>
      </div>
    ))}
  </div>
}
