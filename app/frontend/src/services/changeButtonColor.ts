export const changeButtonColor = (event: React.FormEvent<HTMLInputElement>) => {
	const targetButton = event.currentTarget;
	const buttonClass = targetButton.classList[0];
	const buttons = document.querySelectorAll(`.${buttonClass}`);
	buttons.forEach((button) => button.classList.remove('selected') );
	targetButton.classList.add('selected');
};
