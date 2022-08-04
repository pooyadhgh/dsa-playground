// min value in an array

function getMinValue(numbers) {
  let currentMin = numbers[0];

  for (const number of numbers) {
    if (number < currentMin) {
      currentMin = number;
    }
  }

  return currentMin;
}

console.log(getMinValue([12, 3, 5, 76]));
