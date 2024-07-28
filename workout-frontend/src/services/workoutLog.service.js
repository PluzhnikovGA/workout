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

	async complete(id) {
		return await $axios.patch(`${LOG}/complete/${id}`);
	}
}

export default new WorkoutLogService();
