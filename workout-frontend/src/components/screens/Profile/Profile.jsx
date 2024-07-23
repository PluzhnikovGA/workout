import cn from 'clsx';

import Loader from '../../ui/Loader/Loader';

import useProfile from '../../../hooks/useProfile';

import Header from '../../Layout/Header/Header';
import stylesLayout from '../../Layout/Layout.module.scss';

import styles from './Profile.module.scss';
import Statistics from './Statistics/Statistics';

export default function Profile() {
	const { data, isLoading } = useProfile();

	return (
		<>
			<div
				className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
				style={{
					backgroundImage: 'url("/images/profile-bg.jpg")',
					height: 356
				}}
			>
				<Header />
				<div className={styles.center}>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<img
								src='/images/header/user.svg'
								alt='Profile'
								height={56}
								draggable={false}
							/>
							<h1 className={stylesLayout.heading}>{data?.user.email}</h1>
						</>
					)}
				</div>
				<h1>{data?.email}</h1>
				<Statistics />
			</div>
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<div className={styles.before_after}>
					<div>
						<div className={styles.heading}>Before</div>
						<img src='/images/before.jpg' draggable={false} />
					</div>
					<div>
						<div className={styles.heading}>After</div>
						<img src='/images/after.jpg' draggable={false} />
					</div>
				</div>
			</div>
		</>
	);
}
