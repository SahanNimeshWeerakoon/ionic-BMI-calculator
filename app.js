const calculateBtn = document.getElementById('calc-btn');
const resetBtn = document.getElementById('reset-btn');
const heightInput = document.getElementById('height-input');
const weightInput = document.getElementById('weight-input');

const reset = () => {
	heightInput.value = '';
	weightInput.value = '';
}

const calculateBMI = () => {
	let heightVal = +heightInput.value;
	let weightVal = +weightInput.value;

	let BMI = weightVal / (heightVal*heightVal);

	console.log(BMI);
}

calculateBtn.addEventListener('click', calculateBMI);
resetBtn.addEventListener('click', reset);