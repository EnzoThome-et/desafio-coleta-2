import { DBQuestions } from '../interfaces/Questions';

const dataMapper = (data: DBQuestions[]) => {
	let total = 0;
	let positiva = 0;
	let negativa = 0;
	let naoAvaliada = 0;

	data.forEach(({QuantidadePositiva,QuantidadeNegativa,QuantidadeNaoAvaliada}) => {
		total += (QuantidadePositiva + QuantidadeNegativa + QuantidadeNaoAvaliada);
		positiva += QuantidadePositiva;
		negativa += QuantidadeNegativa;
		naoAvaliada += QuantidadeNaoAvaliada;
	});

	return {
		total,
		positiva,
		negativa,
		naoAvaliada
	};
};

export default dataMapper;