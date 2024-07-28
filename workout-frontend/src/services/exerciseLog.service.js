import { $axios } from '../api';

import { EXERCISE } from './exercise.service';

const LOG = `${EXERCISE}/log`;

class ExerciseLogService {
	async getById(id) {
		return await $axios.get(`${LOG}/${id}`);
	}

	async create(exerciseId) {
		return await $axios.post(`${LOG}/${exerciseId}`);
	}

	// weight, repeat
	async updateTime(timeId, body) {
		return await $axios.put(`${LOG}/time/${timeId}`, body);
	}

	// isCompleted
	async complete(id, body) {
		return await $axios.patch(`${LOG}/complete/${id}`, body);
	}
}

export default new ExerciseLogService();
