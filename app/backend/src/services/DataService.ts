import Questions from '../models/Questions';
import IQuestions from '../interfaces/Questions';
import bodyFormater from '../helpers/bodyFormater';
import {saveFile, loadFile }from '../helpers/saveFile';
class DataService {
	static create = async (obj: IQuestions) => {
		const newData = bodyFormater(obj);
		const newQuestions = new Questions(newData);
		await newQuestions.save();
		saveFile(newQuestions);
		return newQuestions;
	};

	static getAll = async () => {
		const data = loadFile();
		return data;
	};

}

export default DataService;