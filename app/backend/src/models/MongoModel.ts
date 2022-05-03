import { Model as M, Document } from 'mongoose';

import { Model } from '../interfaces/Model';

abstract class MongoModel<T> implements Model<T> {
	constructor(protected model: M<T & Document>) {}

	create = async (obj: T): Promise<T> => this.model.create({...obj});

	read = async (): Promise<T[]> => this.model.find();
}

export default MongoModel;