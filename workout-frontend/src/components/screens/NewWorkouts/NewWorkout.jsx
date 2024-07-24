import { Link } from 'react-router-dom';

import Alert from '../../ui/Alert/Alert';
import Button from '../../ui/Button/Button';
import Field from '../../ui/Field/Field';
import Loader from '../../ui/Loader/Loader';

import useNewWorkoutPage from '../../../hooks/useNewWorkoutPage';

import Layout from '../../Layout/Layout';

import SelectExercises from './SelectExercises/SelectExercises';

export default function NewWorkout() {
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
	} = useNewWorkoutPage();

	return (
		<>
			<Layout
				bgImage='/images/new-workout-bg.jpg'
				heading='Create new workout'
			/>
			<div className='wrapper-inner-page'>
				{isError && <Alert type='error' text={error.message} />}
				{isSuccess && <Alert text='Workout created successfully' />}
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

					<Link to='/new-exercise' className='darkLink'>
						Add new exercise
					</Link>

					<SelectExercises control={control} />
					{errors?.iconPath && (
						<div className='error'>{errors?.iconPath?.message}</div>
					)}
					<Button>Create</Button>
				</form>
			</div>
		</>
	);
}
