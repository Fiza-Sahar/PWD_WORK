// // This function checks if a number is prime
// function isPrime(num) {
//     if (num < 2) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) return false;
//     }
//     return true;
//   }
  
//   // Listen for messages from the main script
//   onmessage = function(e) {
//     const limit = e.data;
//     const primes = [];
//     for (let i = 2; i <= limit; i++) {
//       if (isPrime(i)) {
//         primes.push(i);
//       }
//     }
//     postMessage(primes); // Send result back to main thread
//   };
  
// onmessage = function(event) {
//     const number = event.data;
//     let result = 1;
//     for (let i = 1; i <= number; i++) {
//         result *= i;
//     }
//     postMessage(result); // Send back the result
// };
