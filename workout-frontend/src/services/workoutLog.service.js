import { $axios } from '../api';

import { WORKOUT } from './workout.service';

const LOG = `${WORKOUT}/log`;

class WorkoutLogService {
	async getById(id) {
		return await $axios.get(`${LOG}/${id}`);
	}

	async create(workoutId) {
		return await $axios.post(`${LOG}/${workoutId}`);
	}

	async completed(id) {
		return await $axios.patch(`${LOG}/${id}`);
	}
}

export default new WorkoutLogService();
