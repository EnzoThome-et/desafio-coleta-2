import React, {useState} from 'react';
import { changeButtonColor } from '../services/changeButtonColor';
import { textAreaCounter } from '../services/counter';
import { useForm } from 'react-hook-form';
import '../styles/input.css';

const Page = () => {
	const { register, handleSubmit } = useForm();
	const [data, setData] = useState('');
	return (
		<>
			<form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
				<h2> Desafio Coleta - GRX </h2>

				<p data-testid="question-one"> 1) Você se considera bom em lógica? </p>
				<div data-testid="first-response">
					<input type="button" value="Sim" {...register('Pergunta1')} className="R1" onClick={(e) => changeButtonColor(e)}/>
					<input type="button" value="Não" {...register('Pergunta1')} className="R1" onClick={(e) => changeButtonColor(e)}/>
				</div>

				<p data-testid="question-two"> 2) Gosta de aprender com desafios? </p>
				<div data-testid="second-response">
					<input type="button" {...register('Pergunta2')} value="Sim" className="R2" onClick={(e) => changeButtonColor(e)}/>
					<input type="button" {...register('Pergunta2')} value="Não" className="R2" onClick={(e) => changeButtonColor(e)}/>
				</div>

				<p data-testid="question-three"> 3) Gostaria de fazer parte da GRX? </p>
				<select {...register('Pergunta3')}>
					<option value="Sim">Sim</option>
					<option value="Não">Não</option>
					<option value="Não Sei">Não Sei</option>
					<option value="Agora !!">Agora !!</option>
				</select>

				<p data-testid="question-four"> 4) Por favor, justifique a resposta anterior </p>
				<textarea {...register('Pergunta4')} className="textarea" id="fourth-response" minLength={15} maxLength={200} onChange={() => { textAreaCounter();}}/>
				<p className="counter">200</p>

				<button type="submit">Enviar</button>
				<p>{data}</p>
			</form>
			
		</>
	);
};

export default Page;