const num1Elem = document.getElementById("num1");
const num2Elem = document.getElementById("num2");
const operatorElem = document.getElementById("operator");
const guesElem = document.getElementById("gues");

document.getElementsByTagName("form")[0].onsubmit = (event) => {
	event.preventDefault();
	checkGues();
};

let num1;
let num2;
let result;

let rightGueses = 0;
let wrongGueses = 0;

function checkGues() {
	const gues = Number(guesElem.value);

	if (gues == result) {
		document.body.classList.add("green");
		setTimeout(() => document.body.classList.remove("green"), 1);
		rightGueses++;
	} else {
		document.body.classList.add("red");
		setTimeout(() => document.body.classList.remove("red"), 1);
		wrongGueses++;
	}

	guesElem.value = "";
	generateNewQuestion();
}

function generateNewQuestion() {
	num1 = randomNumber(-100, 100);
	num2 = randomNumber(-100, 100);
	let operator;

	switch (randomNumber(1, 4)) {
		case 1: // +
			result = num1 + num2;
			operator = "+";
			break;
		case 2: // -
			result = num1 - num2;
			operator = "-";
			break;
		case 3: // *
			result = num1 * num2;
			operator = "*";
			break;
		case 4: // /
			result = num1 / num2;
			operator = "/";
			break;
	}

	operatorElem.innerHTML = operator;
	num1Elem.innerHTML = num1;
	num2Elem.innerHTML = num2;
}

function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

generateNewQuestion();
