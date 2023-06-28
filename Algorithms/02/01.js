function findKthElement(arr1, arr2, k) {
    const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
    return mergedArray[k - 1];
  }
  
  const arr1 = [100, 112, 256, 349, 770];
  const arr2 = [72, 86, 113, 119, 265, 445, 892];
  const k = 7;
  
  const result = findKthElement(arr1, arr2, k);
  console.log(result); // Output: 256
  