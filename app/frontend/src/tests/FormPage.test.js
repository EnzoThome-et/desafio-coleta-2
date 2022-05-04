import React from 'react';
import { render } from '@testing-library/react';
import FormPage from '../pages/FormPage';

describe('Elements of page', () => {
	it('has a title', () => {
		const { getByText } = render(<FormPage/>);
		const titleElement = getByText(/Desafio Coleta - GRX/i);
		expect(titleElement).toBeInTheDocument();
	});
	
	it('has the first question', () => {
		const { getByTestId } = render(<FormPage/>);
		const firstQuestion = getByTestId('question-one');
		const text = '1) Você se considera bom em lógica?';
		expect(firstQuestion).toHaveTextContent(text);
		expect(firstQuestion).toBeInTheDocument();
	});
	
	it('has the second question', () => {
		const { getByTestId } = render(<FormPage/>);
		const secondQuestion = getByTestId('question-two');
		const text = '2) Gosta de aprender com desafios?';
		expect(secondQuestion).toHaveTextContent(text);
		expect(secondQuestion).toBeInTheDocument();
	});

	it('has the third question', () => {
		const { getByTestId } = render(<FormPage/>);
		const thirdQuestion = getByTestId('question-three');
		const text = '3) Gostaria de fazer parte da GRX?';
		expect(thirdQuestion).toHaveTextContent(text);
		expect(thirdQuestion).toBeInTheDocument();
	});

	it('has the fourth question', () => {
		const { getByTestId } = render(<FormPage/>);
		const fourthQuestion = getByTestId('question-four');
		const text = '4) Por favor, justifique a resposta anterior';
		expect(fourthQuestion).toHaveTextContent(text);
		expect(fourthQuestion).toBeInTheDocument();
	});
});

describe('Questions of form', () => {
	it('the first question has two buttons', () => {
		const { getByTestId } = render(<FormPage/>);
		const yesButton = getByTestId('SR1');
		const noButton = getByTestId('NR1');
		expect(yesButton).toBeInTheDocument();
		expect(noButton).toBeInTheDocument();
	});

	it('the second question has two buttons', () => {
		const { getByTestId } = render(<FormPage/>);
		const yesButton = getByTestId('SR2');
		const noButton = getByTestId('NR2');
		expect(yesButton).toBeInTheDocument();
		expect(noButton).toBeInTheDocument();
	});

	it('the third question has a select tag', () => {
		const { getByRole } = render(<FormPage/>);
		const selectElement = getByRole('combobox');
		expect(selectElement).toBeInTheDocument();
	});

	it('the fourth question has a select tag', () => {
		const { getByRole } = render(<FormPage/>);
		const selectElement = getByRole('textbox');
		expect(selectElement).toBeInTheDocument();
	});
});