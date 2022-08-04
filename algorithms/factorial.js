function factorial(number) {
  let result = 1;

  for (let i = 1; i <= number; i++) {
    result = result * i;
  }

  return result;
}

console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
