import React from 'react';
import { changeButtonColor } from '../services/changeButtonColor';
import { textAreaCounter } from '../services/counter';
import '../styles/input.css';

const Page = () => {
	return (
		<>
			<form>
				<h2> Desafio Coleta - GRX </h2>

				<p data-testid="question-one"> 1) Você se considera bom em lógica? </p>
				<div data-testid="first-response">
					<input type="button" value="Sim" className="R1" onClick={(e) => changeButtonColor(e)}/>
					<input type="button" value="Não" className="R1" onClick={(e) => changeButtonColor(e)}/>
				</div>

				<p data-testid="question-two"> 2) Gosta de aprender com desafios? </p>
				<div data-testid="second-response">
					<input type="button" value="Sim" className="R2" onClick={(e) => changeButtonColor(e)}/>
					<input type="button" value="Não" className="R2" onClick={(e) => changeButtonColor(e)}/>
				</div>

				<p data-testid="question-three"> 3) Gostaria de fazer parte da GRX? </p>
				<select>
					<option value="Sim">Sim</option>
					<option value="Não">Não</option>
					<option value="Não Sei">Não Sei</option>
					<option value="Agora !!">Agora !!</option>
				</select>

				<p data-testid="question-four"> 4) Por favor, justifique a resposta anterior </p>
				<textarea className="textarea" id="fourth-response" minLength={15} maxLength={200} onChange={() => { textAreaCounter();}}/>
				<p className="counter">200</p>

				<button type="submit">Enviar</button>
			</form>
			
		</>
	);
};

export default Page;