import React from 'react';
import PropTypes from 'prop-types';
import Register from '../interfaces/hookForm.interface';

const QuestionThree = (props: Register) => {
	const {register, errors} = props;
	return(
		<>
			<p data-testid="question-three"> 3) Gostaria de fazer parte da GRX? </p>
			<select {...register('Pergunta3', { required: true })}>
				<option value="">Selecione...</option>
				<option value="Sim">Sim</option>
				<option value="Não">Não</option>
				<option value="Não Sei">Não Sei</option>
				<option value="Agora !!">Agora !!</option>
			</select>
			{errors.Pergunta3?.type === 'required' && <span>Selecione uma opção!</span>}
		</>
	);
};

QuestionThree.propTypes = {
	register: PropTypes.func.isRequired
};

export {QuestionThree};