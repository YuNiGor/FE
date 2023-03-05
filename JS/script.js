
const num = prompt('Введите число')
console.log(num / 100 * 10)

const number1 = +prompt('Введите первое число')
const number2 = +prompt('Введите второе число')
if(number1 > number2) {
console.log(number2)
} else if (number1 < number2) {
console.log(number1)
}

const number = prompt('Введите число')
if(number > 100) {
console.log('Число больше 100')
} else if(number < 100) {
console.log('Число меньше 100')
} else if(number == 100) {
console.log('Число равно 100')
}

const myName = prompt('Введите ваше имя')
const myAge = prompt('Укажите ваш возраст')
if(myAge >= 18) {
console.log('Hello,' + myName)
} else if(myAge < 18) {
console.log('Hi,' + myName)
} 