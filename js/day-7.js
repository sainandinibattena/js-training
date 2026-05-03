// Day 7 

// 1. Greetings using map
const names = ["Priya", "Aarav", "Riya"];

const greetings = names.map(name => "Hello, " + name);
console.log(greetings);


// 2. Even numbers + sum using reduce
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log(evenNumbers); 

const evenSum = evenNumbers.reduce((acc, n) => acc + n, 0);
console.log(evenSum); 


// 3. Find max using Math.max and reduce
const arr = [3, 1, 4, 1, 5, 9, 2, 6];

// Method 1
const max1 = Math.max(...arr);
console.log(max1); // 9

// Method 2
const max2 = arr.reduce((max, n) => n > max ? n : max, -Infinity);
console.log(max2); // 9


// 4. Average function
function getAverage(arr) {
    const total = arr.reduce((acc, n) => acc + n, 0);
    return total / arr.length;
}

console.log(getAverage([10, 20, 30, 40])); // 25