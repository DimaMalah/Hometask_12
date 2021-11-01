// Запрашиваем число у пользователя 
// Нужно найти минимальный делитель переданного числа.
// Для этого достаточно последовательно проверять делимость, начиная с двойки.
// Если делитель не найден, значит число простое, и делителем является само число.
// Если переданное число меньше единицы, то вывести в консоль  NaN. иначе вывести наименьший делитель числа. 


const num = prompt("Enter any number, please");

if (!num || !num.trim() || typeof (+num) !== "number" || isNaN(+num)) console.log("Entered incorrect data");
if (+num <= 1) console.log("NaN");

for (let i = 2; i <= num; i++) {
	if ((num % i == 0) && i != num) {
		console.log(i)
		break
	} else if ((num % i == 0) && i == num) {
		console.log(`${i} - "is a prime number"`);
	} else {
		continue
	}
}
