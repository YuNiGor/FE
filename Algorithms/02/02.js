function binarySearchRecursive(arr, target, low, high) {
    if (low > high) {
      return -1; // Элемент не найден
    }
  
    const mid = Math.floor((low + high) / 2);
  
    if (arr[mid] === target) {
      return mid; // Элемент найден
    } else if (arr[mid] > target) {
      return binarySearchRecursive(arr, target, low, mid - 1); // Искать в левой половине
    } else {
      return binarySearchRecursive(arr, target, mid + 1, high); // Искать в правой половине
    }
  }
  
  const arr = [10, 20, 30, 40, 50, 60, 70];
  const target = 30;
  
  const result = binarySearchRecursive(arr, target, 0, arr.length - 1);
  console.log(result); // Output: 2 (индекс элемента 30 в массиве)
  