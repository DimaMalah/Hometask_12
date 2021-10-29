// Запрашиваем число у пользователя 
// Нужно найти минимальный делитель переданного числа.
// Для этого достаточно последовательно проверять делимость, начиная с двойки.
// Если делитель не найден, значит число простое, и делителем является само число.
// Если переданное число меньше единицы, то вывести в консоль  NaN. иначе вывести наименьший делитель числа. 


const inputEl = document.querySelector(".input")
const btnEl = document.querySelector("#btn")

btnEl.addEventListener("click", checkNumber)

function checkNumber() {
	for (let j = 2; j != 1; j++) {
		if (inputEl.value % j === 0 && inputEl.value != 0) {
			console.log(j);
			break
		} else {
			if (inputEl.value < 1) {
				console.log('NaN')
				break
			} else if (inputEl.value == 1) {
				console.log(inputEl.value)
				break
			}
			else {
				continue
			}
		}
	}
	inputEl.value = ""
}
