const numbers = [1, 5, 2, 6, 10, 0, 8, 7, 3];

function findPairsWithSum10(arr) {
  const pairs = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 10) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }

  return pairs;
}

const pairs = findPairsWithSum10(numbers);
console.log(pairs);

  