let array = [5, 1, 2, 3, 4];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let isChanged = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isChanged = true;
      }
    }
    if (!isChanged) break;
  }
  console.log(arr);
}

bubbleSort(array);
