import cn from 'clsx';
import { Controller } from 'react-hook-form';

import Alert from '../../ui/Alert/Alert';
import Button from '../../ui/Button/Button';
import Field from '../../ui/Field/Field';
import Loader from '../../ui/Loader/Loader';

import useNewExercisePage from '../../../hooks/useNewExercisePage';

import Layout from '../../Layout/Layout';

import styles from './NewExercise.module.scss';
import { getIconPath } from './iconPath.util';

const typeExercises = ['chest', 'shoulders', 'biceps', 'legs', 'hit', 'back'];

export default function NewExercise() {
	const {
		register,
		handleSubmit,
		errors,
		control,
		isSuccess,
		isError,
		isLoading,
		error,
		onSubmit
	} = useNewExercisePage();

	return (
		<>
			<Layout
				bgImage='/images/new-exercise-bg.jpg'
				heading='Create new exercise'
				backLink='/new-workout'
			/>
			<div className='wrapper-inner-page'>
				{isError && <Alert type='error' text={error.message} />}
				{isSuccess && <Alert text='Exercise created successfully' />}
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.name?.message}
						name='name'
						register={register}
						options={{
							required: 'Name is required'
						}}
						type='text'
						placeholder='Enter name'
					/>
					<Field
						error={errors?.times?.message}
						name='times'
						register={register}
						options={{
							valueAsNumber: true,
							validate: value => value > 0 || 'Times must be number',
							required: 'Times is required'
						}}
						type='number'
						placeholder='Enter times'
					/>

					<Controller
						name='iconPath'
						control={control}
						render={({ field: { value, onChange } }) => (
							<div className={styles.images}>
								{typeExercises.map(name => (
									<img
										key={`ex img ${name}`}
										src={`${import.meta.env.VITE_SERVER_URL}${getIconPath(name)}`}
										alt={name}
										className={cn({
											[styles.active]: value === getIconPath(name)
										})}
										onClick={() => onChange(getIconPath(name))}
										draggable={false}
										height={45}
									/>
								))}
							</div>
						)}
					/>
					{errors?.iconPath && (
						<div className='error'>{errors?.iconPath?.message}</div>
					)}
					<Button>Create</Button>
				</form>
			</div>
		</>
	);
}
