import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import '../styles/form.css';
import '../styles/button.css';
import Result from '../components/Result';
import { QuestionOne,QuestionTwo,QuestionThree, QuestionFour } from '../components';

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
				<QuestionOne register={register} errors={errors}/>
				<QuestionTwo register={register} errors={errors}/>
				<QuestionThree register={register} errors={errors}/>
				<QuestionFour register={register} errors={errors} />
				<button type="submit" className="submit">Enviar</button>
				{typeof(result) !== 'string' && <Result result={result}/>}
			</form>
			
		</main>
	);
};

export default Page;