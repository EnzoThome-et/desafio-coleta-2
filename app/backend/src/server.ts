import App from './app';
import connection from './models/connection';

const PORT = process.env.PORT || 3001;

connection();
new App().startServer(PORT);