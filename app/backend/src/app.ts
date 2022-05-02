import express from 'express';
import DataController from './controllers/DataController';
class App {
	public app: express.Application;

	constructor() {
		this.app = express();
		this.app.use(express.json());
	}

	private config():void {
		const accessControl: express.RequestHandler = (_req, res, next) => {
			res.header('Access-Control-Allow-Origin', '*');
			res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT, PATCH');
			res.header('Access-Control-Allow-Headers', '*');
			next();
		};

		this.app.use(accessControl);

		this.app.post('/data', DataController.create);
	}


	public startServer(PORT: string | number): void {
		this.app.listen(PORT, () => console.log(`Aplicação rodando na porta ${PORT}`));
	}
}

export default App;