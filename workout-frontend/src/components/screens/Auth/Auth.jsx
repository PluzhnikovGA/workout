import Button from '../../ui/Button/Button';
import Field from '../../ui/Field/Field';
import Loader from '../../ui/Loader/Loader';

import useAuthPage from '../../../hooks/useAuthPage';

import Layout from '../../Layout/Layout';

import styles from './Auth.module.scss';

export default function Auth() {
	const { register, isLoading, errors, handleSubmit, onSubmit, setType } =
		useAuthPage();

	return (
		<>
			<Layout heading='Sign in' bgImage='/images/auth-bg.png' />
			<div className='wrapper-inner-page'>
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.email?.message}
						name='email'
						register={register}
						options={{
							required: 'Email is required'
						}}
						type='text'
						placeholder='Enter email'
					/>

					<Field
						error={errors?.password?.message}
						name='password'
						register={register}
						options={{
							required: 'Password is required'
						}}
						type='password'
						placeholder='Enter password'
					/>

					<div className={styles.wrapperButtons}>
						<Button clickHandler={() => setType('login')}>Sign in</Button>
						<Button clickHandler={() => setType('register')}>Sign up</Button>
					</div>
				</form>
			</div>
		</>
	);
}
