//TASK-1

// Declaring variables of different types
let myName = "Sai Nandini";        // string
let age = 23;                 // number
let isStudent = true;         // boolean
let emptyValue = null;        // null
let notAssigned;              // undefined

// Logging value + type

console.log(myName, typeof myName);         // Sai Nandini string
console.log(age, typeof age);               // 23 number
console.log(isStudent, typeof isStudent);   // true boolean
console.log(emptyValue, typeof emptyValue); // null object 
console.log(notAssigned, typeof notAssigned); // undefined undefined


//TASK-2

console.log("10" + 5);     // "105"  (string concatenation)
console.log("10" - 5);     // 5      (string → number conversion)
console.log(true + true);  // 2      (1 + 1)
console.log("" + false);   // "false" (string conversion)
console.log(null + 1);     // 1      (null → 0)

//TASK-3

const fullName = "  Battena Sai Nandini  ";

console.log(fullName.trim()); // "Battena Sai Nandini"

console.log(fullName.trim().toUpperCase()); // "BATTENA SAI NANDINI"


console.log(fullName.trim().length); // 19


console.log(fullName.includes("Sai")); // true


console.log(fullName.trimStart().slice(0,7)); //Battena

//Bonus Type Converter

let str="42";
str=Number(str);
console.log((typeof(str)),str); //Number 42

let num=100;
num=String(num)
console.log((typeof(num)),num); //string 100


console.log(Boolean('0')); //true

