import { Schema, model as createModel, Document } from 'mongoose';
import { Questions } from '../interfaces/Questions';
import MongoModel from './MongoModel';

interface DataDocument extends Questions, Document {}

const dataSchema = new Schema<DataDocument>({
	Pergunta1: String,
	Pergunta2: String,
	Pergunta3: String,
	Pergunta4: String,
}, { versionKey: false });

class DataModel extends MongoModel<DataDocument> {
	constructor(model = createModel('Questions', dataSchema)) {
		super(model);
	}
}

export default DataModel;