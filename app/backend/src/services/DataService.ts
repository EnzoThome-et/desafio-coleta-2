import { Questions } from '../interfaces/Questions';

export default class DataService {
	static async create(data: Questions) {
		try {
			const data = await Data.create(data);
			return data;
		} catch (error) {
			console.log(error);
		}
	}
}