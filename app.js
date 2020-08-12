const calculateBtn = document.querySelector('ion-button');
const heightInput = document.getElementById('height-input');
const weightInput = document.getElementById('weight-input');

const calculateBMI = () => {
	let heightVal = +heightInput.value;
	let weightVal = +weightInput.value;

	let BMI = weightVal / (heightVal*heightVal);

	console.log(BMI);
}

calculateBtn.addEventListener('click', calculateBMI);
