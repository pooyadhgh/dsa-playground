// isPrime function i.e: isPrime(5) = true , isPrime(6) = false

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }

  return true;
}

console.log(isPrime(5));
console.log(isPrime(6));
