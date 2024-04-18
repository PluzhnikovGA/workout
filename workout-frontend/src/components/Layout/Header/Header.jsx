import { useAuth } from '../../../hooks/useAuth'
import Hamburger from '../../Hamburger/Hamburger';
import styles from './Header.module.scss'
import { FiArrowLeft } from 'react-icons/fi'

export default function Header({ backLink }) {
  /* TODO: React router useHistory*/
  const { isAuth } = useAuth();

  return <div className={styles.header}>
    <button onClick={() => {}}>
      <FiArrowLeft color="#fff" />
    </button>
    <Hamburger />
  </div>
}
