// o(n)
function factorial(number) {
  let result = 1;

  if (number === 2) {
    result = 2;
  }

  for (let i = 2; i <= number; i++) {
    result = result * i;
  }

  return result;
}

// o(n)
function recursiveFactorial(number) {
  if (number === 2) return 2;
  return number * recursiveFactorial(number - 1);
}

console.log(factorial(5));
console.log(recursiveFactorial(5));
