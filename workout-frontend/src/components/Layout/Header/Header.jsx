import { IoMdArrowBack } from 'react-icons/io';
import { SlUser } from 'react-icons/sl';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAuth } from '../../../hooks/useAuth';

import Hamburger from '../../Hamburger/Hamburger';

import styles from './Header.module.scss';

export default function Header({ backLink = '' }) {
	const { pathname } = useLocation();
	const navigate = useNavigate();

	const { isAuth } = useAuth();

	return (
		<div className={styles.header}>
			{pathname !== '/auth' &&
				(pathname !== '/' || !isAuth ? (
					<button
						onClick={() => {
							navigate(isAuth ? backLink : '/auth');
						}}
					>
						<IoMdArrowBack />
					</button>
				) : (
					<button onClick={() => navigate('/profile')}>
						<SlUser />
					</button>
				))}
			{isAuth && <Hamburger />}
		</div>
	);
}
