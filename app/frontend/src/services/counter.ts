
export const textAreaCounter = () => {
	const textArea = document.querySelector('textarea') as HTMLTextAreaElement;
	const counter = document.querySelector('.counter') as HTMLParagraphElement;
	const maxLength = 200;
	const textAreaValue = textArea?.value.length;
	const result = (maxLength - textAreaValue).toString();
	counter.innerHTML = `${textArea?.value.length}/${result}`;
	if(textAreaValue < 15 || textAreaValue > 200) counter.style.color = 'red';
	if(textAreaValue > 15 && textAreaValue < 200) counter.style.color = 'black';
	
};
