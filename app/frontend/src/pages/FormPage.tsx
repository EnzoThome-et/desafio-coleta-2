import React, {useState} from 'react';
import { textAreaCounter } from '../services/counter';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import '../styles/form.css';
import '../styles/button.css';
import ResultPage from '../components/Result';

const Page = () => {
	const { register, formState: { errors }, handleSubmit } = useForm();
	const [result, setResult] = useState('');
	return (
		<main className="formContainer">
			<form onSubmit={handleSubmit(async (data) => {
				await axios({
					method: 'post',
					url: 'http://localhost:3001/data',
					data
				});
				const result = await axios.get('http://localhost:3001/results');
				setResult(result.data);				
			}
			)}>
				<h1> Desafio Coleta - GRX </h1>

				<p className="p1">1) Você se considera bom em lógica? </p>
				<div className="firstQuestionContainer">
					<div className="button">
						<input type="radio" id="SR1" value="Sim" {...register('Pergunta1', {required: true})} />
						<label htmlFor="SR1">Sim</label>
					</div>
					<div className="button">
						<input type="radio" id="NR1" value="Não" {...register('Pergunta1', {required: true})} />
						<label htmlFor="NR1">Não</label>
					</div>
				</div>
				{errors.Pergunta1?.type === 'required' && <span>Resposta obrigatória!</span>}
				
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
				
				<p data-testid="question-three"> 3) Gostaria de fazer parte da GRX? </p>
				<select {...register('Pergunta3', { required: true })}>
					<option value="">Selecione...</option>
					<option value="Sim">Sim</option>
					<option value="Não">Não</option>
					<option value="Não Sei">Não Sei</option>
					<option value="Agora !!">Agora !!</option>
				</select>
				{errors.Pergunta3?.type === 'required' && <span>Selecione uma opção!</span>}

				<p data-testid="question-four" className="question-four"> 4) Por favor, justifique a resposta anterior </p>
				<textarea {...register('Pergunta4', {required: true})} className="textarea" id="fourth-response" minLength={15} maxLength={200} onChange={() => { textAreaCounter();}}/>
				<p className="counter">0/200</p>
				{errors.Pergunta4?.type === 'required' && <span>Justifique sua resposta!</span>}

				<button type="submit" className="submit">Enviar</button>
				{typeof(result) !== 'string' && <ResultPage result={result}/>}
			</form>
			
		</main>
	);
};

export default Page;