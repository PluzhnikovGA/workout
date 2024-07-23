import { $axios } from '../api';

const EXERCISE = '/exercise';

class ExerciseService {
	async getAll() {
		return await $axios.get(`${EXERCISE}/`);
	}

	// name, times, iconPath
	async create(body) {
		return await $axios.post(`${EXERCISE}/`, body);
	}

	async update(id, body) {
		return await $axios.put(`${EXERCISE}/${id}`, body);
	}

	async delete(id) {
		return await $axios.delete(`${EXERCISE}/${id}`);
	}
}

export default new ExerciseService();
