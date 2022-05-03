import mongoose from 'mongoose';

const connection = (
	mongoDatabaseURI = process.env.MONGO_URI
	|| 'mongodb://localhost:27017/Data'
) => {
	try {
		mongoose.connect(mongoDatabaseURI);
		console.log(' >>> Database connected');
		
	} catch (error) {
		console.log(error);
	}
};

export default connection;