import express from 'express';

class App {
	public app: express.Express;

	constructor() {
		this.app = express();
		this.app.use(express.json());
	}

	public startServer(port = 3001) {
		const actualPort = process.env.PORT || port;
		this.app.listen(
			actualPort,
			() => console.log(`Aplicação rodando na porta ${actualPort}`)
		);
	}
}

export default App;