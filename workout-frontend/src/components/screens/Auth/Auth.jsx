import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from '../../ui/Button/Button';
import Field from '../../ui/Field/Field';
import Loader from '../../ui/Loader/Loader';

import Layout from '../../Layout/Layout';

import styles from './Auth.module.scss';

const isLoading = false;
const isLoadingAuth = false;

export default function Auth() {
	const [type, setType] = useState('auth');
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'onChange'
	});

	const onSubmit = data => {
		console.log(data);
	};

	return (
		<>
			<Layout heading='Sing in' bgImage='/images/auth-bg.png' />
			<div className='wrapper-inner-page'>
				{isLoading || (isLoadingAuth && <Loader></Loader>)}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.email?.message}
						name='email'
						register={register}
						options={{
							...register('email', {
								required: 'Email is required'
							})
						}}
						type='text'
						placeholder='Enter email'
					/>
					<Field
						error={errors?.password?.message}
						name='password'
						register={register}
						options={{
							...register('password', {
								required: 'Password is required'
							})
						}}
						type='text'
						placeholder='Enter password'
					/>
					<div className={styles.wrapperButtons}>
						<Button clickHandler={() => setType('auth')}>Sign in</Button>
						<Button clickHandler={() => setType('reg')}>Sign up</Button>
					</div>
				</form>
			</div>
		</>
	);
}
