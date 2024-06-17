import { useNavigate } from 'react-router-dom';

import Button from '../../ui/Button/Button';

import { useAuth } from '../../../hooks/useAuth';

import Layout from '../../Layout/Layout';

import styles from './Home.module.scss';

export default function Home() {
	const { isAuth } = useAuth();

	const navigate = useNavigate();

	return (
		<Layout bgImage='/images/home-bg.jpg'>
			<Button clickHandler={() => navigate(isAuth ? '/new-workout' : '/auth')}>
				{isAuth ? 'New' : 'Sign in'}
			</Button>
			<h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
		</Layout>
	);
}
