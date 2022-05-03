import express from 'express';
import DataController from './controllers/DataController';
import ResultController from './controllers/ResultsController';
class App {
	public app: express.Express;

	constructor() {
		this.app = express();
		this.config();
	}

	private config():void {
		const accessControl: express.RequestHandler = (_req, res, next) => {
			res.header('Access-Control-Allow-Origin', '*');
			res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT, PATCH');
			res.header('Access-Control-Allow-Headers', '*');
			next();
		};

		this.app.use(accessControl);
		this.app.use(express.json());

		this.app.post('/data', DataController.create);
		this.app.get('/data', DataController.getAll);
		this.app.get('/results', ResultController.getAll);
	}


	public startServer(PORT: string | number): void {
		this.app.listen(PORT, () => console.log(`Aplicação rodando na porta ${PORT}`));
	}
}

export default App;