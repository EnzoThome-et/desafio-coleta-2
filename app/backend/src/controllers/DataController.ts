import {Request, Response} from 'express';

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
}