const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });
const number = Math.round(Math.random() * 100);

function choosingNumber (number, randomNumber) {
	if(number === randomNumber) {
		console.log(`Число отгаданно ${number}!`);
		rl.close();
	} else if (number > randomNumber){
		rl.question(`Больше \n`, (input) => {
			choosingNumber(number, Number(input));
		})
	} else if (number < randomNumber) {
		rl.question(`Меньше \n`, (input) => {
			choosingNumber(number, Number(input));
		})
	} else {
		rl.question(`Введите число! \n`, (input) => {
			choosingNumber(number, Number(input));
		})
	}
}

rl.question("Загадано число в диапазоне от 0 до 100 \n", (num) => {
	if(Number(num) === number) {
		console.log(`Число отгаданно ${number}!`);
		rl.close();
	} else if(Number(num) !== number) {
		choosingNumber(number, num);
	}
})

