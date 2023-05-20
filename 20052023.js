const a = prompt('Введите значение:');

if (isValidValue(a)) {
  const arrNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let count = 0;
  for (let i = 0; i < arrNumbers.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (arrNumbers[i] == a[j]) {
        count++;
      }
    }
  }

  if (count === a.length && a.length !== 0) {
    console.log("Number");
  } else if (count !== 0) {
    console.log("invalid value");
  } else if (a === "null") {
    console.log("null");
  } else if (a === "undefined") {
    console.log("undefined");
  } else if (a === "false" || a === "true") {
    console.log("false or true");
  } else if (a === "") {
    console.log('empty string');
  } else if (count === 0) {
    console.log("string");
  }
} else {
  console.log("Недопустимое значение ввода!");
}

// Функция для проверки валидности значения
function isValidValue(value) {
  // В данном примере проверяется, что значение не содержит специальных символов и пробелов
  return /^[a-zA-Z0-9]+$/.test(value);
}
