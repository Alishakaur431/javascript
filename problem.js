function checkNumber() {
    const number = parseFloat(document.getElementById("numberInput").value);
    const resultDiv = document.getElementById("result");

    if (isNaN(number)) {
        resultDiv.textContent = "Please enter a valid number.";
        return;
    }

    let evenOdd = number % 2 === 0 ? "even" : "odd";
    let sign;

    if (number > 0) {
        sign = "positive";
    } else if (number < 0) {
        sign = "negative";
    } else {
        sign = "zero";
    }

    resultDiv.textContent = `The number is ${evenOdd} and ${sign}.`;
}

// Program 1: Calculate the sum of the first N natural numbers
function sumOfNaturalNumbers(N) {
    let sum = (N * (N + 1)) / 2;
    return sum;
}

// Program 2: Calculate the factorial of a given number
function factorial(num) {
    if (num < 0) return "Factorial not defined for negative numbers";
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    return fact;
}

// Program 3: Find factors of a given number
function findFactors(num) {
    let factors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}

// Program 4: Check if an input number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Program 5: Generate the Fibonacci sequence up to a given number of terms
function generateFibonacci(terms) {
    if (terms <= 0) return [];
    let sequence = [0];
    if (terms > 1) sequence.push(1);
    for (let i = 2; i < terms; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

// Program 6: Check if an input string is a palindrome
function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}

// Program 7: Find the sum of digits of an input number
function sumOfDigits(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

// Program 8: Check if an input number is an Armstrong number
function isArmstrong(num) {
    let sum = 0, temp = num;
    const digits = String(num).length;
    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, digits);
        temp = Math.floor(temp / 10);
    }
    return sum === num;
}

// Program 9: Check if an input year is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Program 10: Find the greatest common divisor (GCD) of two numbers
function findGCD(a, b) {
    while (b) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Program 11: Find the least common multiple (LCM) of two numbers
function findLCM(a, b) {
    return (a * b) / findGCD(a, b);
}

// Program 12: Check if two strings are anagrams
function areAnagrams(str1, str2) {
    let sorted1 = str1.split("").sort().join("");
    let sorted2 = str2.split("").sort().join("");
    return sorted1 === sorted2;
}

 
 console.log(sumOfNaturalNumbers(10)); // 55
 console.log(factorial(5)); // 120
 console.log(findFactors(12)); // [1, 2, 3, 4, 6, 12]
 console.log(isPrime(17)); // true
 console.log(generateFibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
 console.log(isPalindrome("racecar")); // true
 console.log(sumOfDigits(1234)); // 10
 console.log(isArmstrong(153)); // true
 console.log(isLeapYear(2024)); // true
 console.log(findGCD(12, 15)); // 3
 console.log(findLCM(12, 15)); // 60
 console.log(areAnagrams("listen", "silent")); // true
