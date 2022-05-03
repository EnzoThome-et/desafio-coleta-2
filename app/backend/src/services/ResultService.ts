import dataMapper from '../helpers/dataMapper';
import DataService from './DataService';

class ResultService {
	static getAll = async () => {
		const data = await DataService.getAll();
		const dataResult = dataMapper(data);
		return dataResult;
	};
}

export default ResultService;