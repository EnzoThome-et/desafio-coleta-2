import React from 'react';
import PropTypes from 'prop-types';
import Register from '../interfaces/hookForm.interface';

const QuestionTwo = (props: Register) => {
	const {register, errors} = props;
	return(
		<>
			<p className="p2">2) Gosta de aprender com desafios? </p>
			<div className="secondQuestionContainer">
				<div className="button">
					<input type="radio" id="SR2" value="Sim" {...register('Pergunta2', {required: true})} />
					<label htmlFor="SR2">Sim</label>
				</div>
				<div className="button">
					<input type="radio" id="NR2" value="Não" {...register('Pergunta2', {required: true})} />
					<label htmlFor="NR2">Não</label>
				</div>
			</div>
			{errors.Pergunta2?.type === 'required' && <span>Resposta obrigatória!</span>}
		</>
	);
};

QuestionTwo.propTypes = {
	register: PropTypes.func.isRequired
};

export {QuestionTwo};