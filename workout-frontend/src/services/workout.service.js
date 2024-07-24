import { $axios } from '../api';

const WORKOUT = '/workout';

class WorkoutService {
	async getAll() {
		return await $axios.get(`${WORKOUT}/`);
	}

	async getById(id) {
		return await $axios.get(`${WORKOUT}/${id}`);
	}

	// name, exerciseIds
	async create(body) {
		return await $axios.post(`${WORKOUT}/`, body);
	}

	async update(id, body) {
		return await $axios.put(`${WORKOUT}/${id}`, body);
	}

	async delete(id) {
		return await $axios.delete(`${WORKOUT}/${id}`);
	}
}

export default new WorkoutService();
