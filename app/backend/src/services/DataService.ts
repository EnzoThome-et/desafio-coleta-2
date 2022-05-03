import Questions from '../models/Questions';
import IQuestions from '../interfaces/Questions';
class DataService {
	static create = async (obj: IQuestions) => {
		const newQuestions = new Questions(obj);
		await newQuestions.save();
		return newQuestions;
	};

	static getAll = async () => {
		const getAllQuestions = await Questions.find();
		return getAllQuestions;
	};

}

export default DataService;