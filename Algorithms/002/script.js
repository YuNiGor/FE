let array = [9, 2, 5, 6, 1, 9, 0, 2, 9, 4, 5, 1, 6, 9, 8, 10];

let newArray = [];
let number = 9;
for (let i = 0; i < array.length; i++) {
  if (array[i] == 9) newArray.push(i);
}
console.log(newArray);