// Fibonacci function i.e: fib(4) = 5

// o(n)
function fib(n) {
  const numbers = [0, 1];

  for (let i = 2; i < n + 1; i++) {
    numbers.push(numbers[i - 2] + numbers[i - 1]);
  }

  return numbers[n];
}

// o(2^n) !!
function recursiveFib(n) {
  if (n < 2) return n;
  return recursiveFib(n - 1) + recursiveFib(n - 2);
}

console.log(fib(8));
console.log(recursiveFib(8));
