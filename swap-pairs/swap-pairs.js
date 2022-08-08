function swapPairs(arr) {
  if (arr.length > 1) {
    for (let i = 0; i < arr.length; i += 2) {
      const temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
    return arr.filter(Boolean);
  }
  return arr;
}

console.log(swapPairs([1, 2, 3, 4]));
console.log(swapPairs([1, 2, 3]));
console.log(swapPairs([]));
console.log(swapPairs([1, 5]));
console.log(swapPairs([3]));
