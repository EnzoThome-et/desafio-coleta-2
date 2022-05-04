import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

const connection = (
	mongoDatabaseURI = process.env.MONGO_URI
	|| 'mongodb://localhost:27017/Data'
) => {
	try {
		mongoose.connect(mongoDatabaseURI);
		console.log(' >>> Database connected');
		console.log(process.env.MONGO_URI);
		
		
	} catch (error) {
		console.log(error);
	}
};

export default connection;