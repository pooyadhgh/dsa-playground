const numbers = [99, 103, 45, 65, 2, 1, 4, 6, 88, 20];

// o(n^2)
// o(1) space complexity
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
  return array;
}

console.log(selectionSort(numbers));
