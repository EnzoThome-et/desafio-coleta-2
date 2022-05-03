export const textAreaCounter = () => {
	const maxLength = 200;
	const textArea = document.querySelector('textarea') as HTMLTextAreaElement;
	const counter = document.querySelector('.counter') as Element;
	const result = maxLength - textArea?.value.length;
	counter.innerHTML = result.toString();
};
