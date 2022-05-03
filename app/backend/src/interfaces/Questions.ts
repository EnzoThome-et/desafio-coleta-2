interface IQuestions {
    'Pergunta1': string,
    'Pergunta2': string,
    'Pergunta3': string,
    'Pergunta4': string,
}

interface DataQuestions extends IQuestions {
    QuantidadePositiva: number,
	QuantidadeNegativa: number,
	QuantidadeNaoAvaliada: number,
}

export {DataQuestions};

export default IQuestions;