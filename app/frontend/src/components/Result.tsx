import React from 'react';
import '../styles/ResultPage.css';
import { IResult } from '../interfaces/resultInterface';

const ResultPage = (props: {result: IResult}) => {
	const {positiva,negativa,naoAvaliada,total} = props.result;

	const transformedObjs = [
		{
			quantity: positiva,
			name: 'Quantidade Positiva',
			percentText: '% Positiva',
			percentValue: `${Math.trunc((positiva * 100) / total) }%`
		},
		{
			quantity: negativa,
			name: 'Quantidade Negativa',
			percentText: '% Negativa',
			percentValue: `${Math.trunc((negativa * 100) / total )}%`
		},
		{
			quantity: naoAvaliada,
			name: 'Quantidade Não Avaliada',
			percentText: '% Não Avaliada',
			percentValue: `${Math.trunc((naoAvaliada * 100) / total) }%`
		}
	];
	
	return (
		<div className="resultContainer">
			<div className="titleContainer">
				<p>Total</p>
				<p>{total}</p>
			</div>
			{transformedObjs.sort((a, b) => b.quantity - a.quantity).map(({name, quantity, percentText, percentValue}, index) => {
				return (
					<div key={index} className="quantityContainer">
						<div className="quantity">
							<p>{name}</p>
							<p>{quantity}</p>
						</div>
						<div className="percent">
							<p>{percentText}</p>
							<p>{percentValue}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ResultPage;