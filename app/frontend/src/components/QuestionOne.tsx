import React from 'react';
import PropTypes from 'prop-types';
import Register from '../interfaces/hookForm.interface';

const QuestionOne = (props: Register) => {
	const {register, errors} = props;
	return(
		<>
			<p className="p1">1) Você se considera bom em lógica? </p>
			<div className="firstQuestionContainer">
				<div className="button">
					<input type="radio" id="SR1" value="Sim" {...register('Pergunta1', {required: true})}/>
					<label htmlFor="SR1">Sim</label>
				</div>
				<div className="button">
					<input type="radio" id="NR1" value="Não" {...register('Pergunta1', {required: true})} />
					<label htmlFor="NR1">Não</label>
				</div>
			</div>
			{errors.Pergunta1?.type === 'required' && <span>Resposta obrigatória!</span>}
		</>
	);
};

QuestionOne.propTypes = {
	register: PropTypes.func.isRequired
};

export default QuestionOne;