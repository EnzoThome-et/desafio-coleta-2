import {Request, Response} from 'express';
import DataService from '../services/DataService';
export default class DataController {
	static async create(req: Request, res: Response) {
		try {
			const {body} = req;
			const data = await DataService.create(body);
			return res.status(200).json(data);
		} catch (error) {
			return res.status(500).json(error);
		}
	}

	static async getAll(_req: Request, res: Response) {
		try {
			const data = await DataService.getAll();
			return res.status(200).json(data);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}