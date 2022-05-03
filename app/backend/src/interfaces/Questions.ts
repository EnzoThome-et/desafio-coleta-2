interface IQuestions {
    'Pergunta1': string,
    'Pergunta2': string,
    'Pergunta3': string,
    'Pergunta4': string,
}

interface DataQuestion extends IQuestions {
    QuantidadePositiva: number,
	QuantidadeNegativa: number,
	QuantidadeNaoAvaliada: number,
}

export {DataQuestion};

export default IQuestions;