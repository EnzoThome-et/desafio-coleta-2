import React from 'react';
import PropTypes from 'prop-types';
import Register from '../interfaces/hookForm.interface';
import { textAreaCounter } from '../services/counter';

const QuestionFour = (props: Register) => {
	const {register, errors} = props;
	return(
		<>
			<p data-testid="question-four" className="question-four"> 4) Por favor, justifique a resposta anterior </p>
			<textarea {...register('Pergunta4', {required: true, maxLength: 200, minLength: 15})} className="textarea" id="fourth-response" onChange={() => { textAreaCounter();}}/>
			<p className="counter">0/200</p>
			{errors.Pergunta4?.type === 'required' && <span>Justifique sua resposta!</span>}
			{errors.Pergunta4?.type === 'maxLength' && <span className="err2">Limite de caracteres atingido!</span>}
			{errors.Pergunta4?.type === 'minLength' && <span className="err3">Atinja o limite mínimo de caracteres!</span>}
		</>
	);
};

QuestionFour.propTypes = {
	register: PropTypes.func.isRequired
};

export {QuestionFour};