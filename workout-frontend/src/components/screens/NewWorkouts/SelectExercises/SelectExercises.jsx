import { Controller } from 'react-hook-form';
import ReactSelect from 'react-select';

import Loader from '../../../ui/Loader/Loader';

import useListExercises from '../../../../hooks/useListExercises';

export default function SelectExercises({ control }) {
	const { data = [], isLoading } = useListExercises();

	if (isLoading) return <Loader />;

	return (
		<Controller
			name='exerciseIds'
			control={control}
			render={({ field: { value, onChange } }) => (
				<ReactSelect
					classNamePrefix='select2-selection'
					placeholder='Exercises...'
					title='Exercises'
					options={data.map(exercise => ({
						value: exercise.id,
						label: exercise.name
					}))}
					value={value}
					onChange={onChange}
					isMulti
				/>
			)}
		/>
	);
}
