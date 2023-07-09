// Давайте начнем с первой задачи, в которой требуется написать функцию сортировки слиянием на JavaScript.
// Сначала разберемся с псевдокодом:

/*
function mergeSort(array)
   if length(array) <= 1
      return array
   mid = length(array) / 2
   left = mergeSort(array[0...mid])
   right = mergeSort(array[mid...end])
   return merge(left, right)

function merge(left, right)
   result = []
   while length(left) > 0 and length(right) > 0
      if left[0] <= right[0]
         append left[0] to result
         remove first element from left
      else
         append right[0] to result
         remove first element from right
   while length(left) > 0
      append left[0] to result
      remove first element from left
   while length(right) > 0
      append right[0] to result
      remove first element from right
   return result
*/

// Теперь переведем этот псевдокод в JavaScript:


function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const mid = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    const result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    return result.concat(left.slice()).concat(right.slice());
}


// Теперь перейдем к второй задаче, в которой нужно прибавить 1 к числу,
// представленному в виде массива. Вот JavaScript-код для этой задачи:


function incrementNumber(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        } else {
            digits[i] = 0;
        }
    }
    digits.unshift(1);
    return digits;
}


// В этой функции мы идем по массиву с конца и увеличиваем последний элемент на 1. 
// Если этот элемент равен 9, мы обнуляем его и переходим к следующему.
// Если мы достигаем начала массива и все элементы равны 9,
// мы добавляем 1 в начало массива