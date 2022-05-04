import App from './app';
import connection from './models/connection';
import * as dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3001;

connection();
new App().startServer(PORT);