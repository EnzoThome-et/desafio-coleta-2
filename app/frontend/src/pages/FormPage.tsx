import React, {useState} from 'react';
import { changeButtonColor } from '../services/changeButtonColor';
import { textAreaCounter } from '../services/counter';
import { useForm } from 'react-hook-form';
import '../styles/input.css';
import '../styles/button.css';

const Page = () => {
	const { register, handleSubmit } = useForm();
	const [data, setData] = useState('');
	return (
		<>
			<form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
				<h2> Desafio Coleta - GRX </h2>

				<div className="button">
					<input type="radio" id="SR1" value="Sim" {...register('Pergunta1')} />
					<label htmlFor="SR1">Sim</label>
				</div>
				<div className="button">
					<input type="radio" id="NR1" value="Não" {...register('Pergunta1')} />
					<label htmlFor="NR1">Não</label>
				</div>

				<div className="button">
					<input type="radio" id="SR2" value="Não" {...register('Pergunta2')} />
					<label htmlFor="SR2">Sim</label>
				</div>
				<div className="button">
					<input type="radio" id="NR2" value="Não" {...register('Pergunta2')} />
					<label htmlFor="NR2">Não</label>
				</div>

				<p data-testid="question-three"> 3) Gostaria de fazer parte da GRX? </p>
				<select {...register('Pergunta3')}>
					<option value="">Selecione...</option>
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