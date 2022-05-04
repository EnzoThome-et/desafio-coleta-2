export const textAreaCounter = () => {
	const maxLength = 200;
	const textArea = document.querySelector('textarea') as HTMLTextAreaElement;
	const textAreaValue = textArea?.value.length;
	const counter = document.querySelector('.counter') as Element;
	const result = (maxLength - textAreaValue).toString();
	counter.innerHTML = `${textArea?.value.length}/${result}`;
};
