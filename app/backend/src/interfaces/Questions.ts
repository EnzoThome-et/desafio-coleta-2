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

interface DBQuestions extends DataQuestions {
    _id: string
}

export {DataQuestions, DBQuestions};

export default IQuestions;