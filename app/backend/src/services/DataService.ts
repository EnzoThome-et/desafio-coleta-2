import Questions from '../models/Questions';
import IQuestions from '../interfaces/Questions';
import bodyFormater from '../middlewares/bodyFormater';
class DataService {
	static create = async (obj: IQuestions) => {
		const newData = bodyFormater(obj);
		const newQuestions = new Questions(newData);
		await newQuestions.save();
		return newQuestions;
	};

	static getAll = async () => {
		const getAllQuestions = await Questions.find();
		return getAllQuestions;
	};

}

export default DataService;