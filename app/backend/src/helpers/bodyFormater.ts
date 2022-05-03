import IQuestions from '../interfaces/Questions';

const bodyFormater = (questions: IQuestions) => {
	const { Pergunta1, Pergunta2, Pergunta3, Pergunta4 } = questions;
	const array = [ Pergunta1, Pergunta2, Pergunta3, Pergunta4];

	let QuantidadePositiva = 0;
	let QuantidadeNegativa = 0;
	let QuantidadeNaoAvaliada = 0;

	array.forEach((question) => {
		if(question === 'Não') QuantidadeNegativa += 1;
		if(question === 'Não Sei') QuantidadeNaoAvaliada += 1;
		else { QuantidadePositiva += 1;}
	});

	const transformedObject = {
		...questions,
		QuantidadePositiva,
		QuantidadeNegativa,
		QuantidadeNaoAvaliada
	};

	return transformedObject;
};

export default bodyFormater;