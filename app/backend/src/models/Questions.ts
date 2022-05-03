import { Schema, model } from 'mongoose';

const QuestionsSchema = new Schema({
	Pergunta1: String,
	Pergunta2: String,
	Pergunta3: String,
	Pergunta4: String,
	QuantidadePositiva: Number,
	QuantidadeNegativa: Number,
	QuantidadeNaoAvaliada: Number,
}, { versionKey: false });

export default model('Questions', QuestionsSchema);