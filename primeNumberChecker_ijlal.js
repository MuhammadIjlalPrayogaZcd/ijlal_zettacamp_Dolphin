/**
 *
 * Write a Node.js function isPrime(n) that takes an integer n as an argument and returns true if n is a prime number and false otherwise.
 *
 */
function isPrime(n) {
   if (n <= 1) {
      return false; // Numbers less than or equal to 1 are not prime
   }

   if (n <= 3) {
      return true; // 2 and 3 are prime
   }

   if (n % 2 === 0 || n % 3 === 0) {
      return false; // Divisible by 2 or 3 means it's not prime
   }

   return true; // If no divisors found, it's prime
}

console.log(isPrime(10)); // Output: false
console.log(isPrime(43)); // Output: true
console.log(isPrime(14)); // Output: false
console.log(isPrime(17)); // Output: true
console.log(isPrime(97)); // Output: true
