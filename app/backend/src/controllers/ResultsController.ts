import {Request, Response} from 'express';


export default class ResultController {

	static async getAll(_req: Request, res: Response) {
		try {
			const data = await ResultService.getAll();
			return res.status(200).json(data);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}
