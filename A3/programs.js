// 1. Check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  console.log(isPrime(7));  // true
  
  
  // 2. Find the factorial of a number
  function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  console.log(factorial(5));  // 120
  
  
  // 3. Count the number of vowels in a string
  function countVowels(str) {
    const vowels = 'aeiou';
    let count = 0;
    for (let char of str.toLowerCase()) {
      if (vowels.includes(char)) count++;
    }
    return count;
  }
  console.log(countVowels("Hello World"));  // 3
  
  
  // 4. Reverse a string
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  console.log(reverseString("JavaScript"));  // "tpircSavaJ"
  
  
  // 5. Check if a string is a palindrome
  function isPalindrome(str) {
    const cleaned = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
  }
  console.log(isPalindrome("A man a plan a canal Panama"));  // true
  
  
  // 6. Find the largest number in an array
  function findLargest(arr) {
    return Math.max(...arr);
  }
  console.log(findLargest([1, 5, 3, 9, 2]));  // 9
  
  
  // 7. Sum of all elements in an array
  function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
      sum += num;
    }
    return sum;
  }
  console.log(sumArray([1, 2, 3, 4, 5]));  // 15
  
  
  // 8. Convert Celsius to Fahrenheit
  function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  console.log(celsiusToFahrenheit(30));  // 86
  
  
  // 9. Find the length of a string without using `.length`
  function getStringLength(str) {
    return str.split('').length;
  }
  console.log(getStringLength("Hello, world!"));  // 13
  
  
  // 10. Sort an array in ascending order
  function sortArray(arr) {
    return arr.sort((a, b) => a - b);
  }
  console.log(sortArray([3, 1, 4, 1, 5, 9]));  // [1, 1, 3, 4, 5, 9]
  