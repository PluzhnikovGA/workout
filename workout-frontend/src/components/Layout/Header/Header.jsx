import { IoMdArrowBack } from 'react-icons/io';

import { useAuth } from '../../../hooks/useAuth';

import Hamburger from '../../Hamburger/Hamburger';

import styles from './Header.module.scss';

export default function Header({ backLink }) {
	/* TODO: React router useHistory*/
	const { isAuth } = useAuth();

	return (
		<div className={styles.header}>
			<button onClick={() => {}}>
				<IoMdArrowBack />
			</button>
			<Hamburger />
		</div>
	);
}
