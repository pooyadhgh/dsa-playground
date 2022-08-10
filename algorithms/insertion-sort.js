const numbers = [99, 103, 45, 65, 2, 1, 4, 6, 88, 20];

// o(n^2)
// o(1) space complexity
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      [array[j - 1], array[j]] = [array[j], array[j - 1]];
      j--;
    }
  }
  return array;
}

console.log(insertionSort(numbers));
