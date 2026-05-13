/*console.log(a);        // undefined          ← var hoisted with undefined
var a = 1;

//console.log(b);        // ReferenceError     ← let hoisted, but in TDZ
//let b = 2;

//console.log(c);        // ReferenceError     ← const hoisted, but in TDZ
//const c = 3;

greet();               // "Hi"               ← function declaration: full body hoisted
function greet() { console.log("Hi"); }

// var — silent undefined (the old, problematic behaviour)
console.log(score);    // undefined            ← no error, but probably not what you wanted
var score = 90;

//console.log(level);    // ReferenceError       ← TDZ — Cannot access 'level' before initialization
//let level = 5;

{
  // <-- start of block. 'mark' is in TDZ here
  // console.log(mark);  // would throw
  let mark = 87;
  console.log(mark);    // 87  ← TDZ has ended, mark is initialised
}*/

// Function declaration — works BEFORE its definition
/*sayHi();           // "Hi"      ← full body hoisted
function sayHi() {
  console.log("Hi");
}

// Function expression with var — TypeError
greet();           // TypeError: greet is not a function
                   //   ↑ greet was hoisted with value 'undefined'.
                   //     Calling undefined() throws TypeError.
var greet = function () {
  console.log("Hello");
};

// Function expression with const — ReferenceError (TDZ)
       // ReferenceError: Cannot access 'welcome' before initialization
const welcome = function () {
  console.log("Welcome");
};
welcome();  

// Arrow function — same as const above (always TDZ if let/const)
shout();           // ReferenceError
const shout = () => console.log("HEY");

const item = "Laptop";
const price = 60000;
const tax = 0.18;

console.log(
  `The ${item} costs ₹${price} + ₹${price * tax} GST = ₹${price + (price * tax)}.`
);


console.log(`
Item   : ${item}
Price  : ₹${price}
GST    : ₹${price * tax}
Total  : ₹${price + (price * tax)}
`);



// 1. Counter — private state
function makeCounter() {
let count = 0; // private — cannot be reached from outside
return function () {
count++; // each call mutates the SAME closed-over count
return count;
};
}
const c = makeCounter();
console.log(c()); // 1
console.log(c()); // 2
console.log(c()); // 3
// console.log(count) // ReferenceError — count is private to the closure



// 2. Private variables — bank account
function createAccount(initial) {
let balance = initial; // PRIVATE — no one outside can touch it
return {
deposit: (amt) => balance += amt,
withdraw: (amt) => balance -= amt,
getBalance: () => balance,
};
}
const acc = createAccount(1000);
acc.deposit(500);
console.log(acc.getBalance()); // 1500
console.log(acc.balance); // undefined — truly private




// 3. Memoization — cache expensive results
function memoize(fn) {
const cache = {}; // closed-over cache, lives across calls
return function (n) {
if (n in cache) return cache[n]; // hit → return cached
cache[n] = fn(n); // miss → compute and store
return cache[n];
};
}
const slowSquare = (n) => { console.log("computing..."); return n * n; };
const fastSquare = memoize(slowSquare);
fastSquare(5); // "computing..." → 25
fastSquare(5); // 25 (no log — served from cache)


// Basic IIFE — runs once, creates a private scope
(function () {
const secret = "hidden"; // not visible outside
console.log("IIFE ran");
})();
// IIFE with parameters
(function (city) {
console.log(`Greetings from ${city}`);
})("Jaipur");
// Arrow IIFE (modern)
(() => {
const x = 42;
console.log(x);
})();
// Pre-ES6 module pattern — the most common historical use
const counterModule = (function () {
let count = 0; // private (closure)
return {
inc: () => ++count,
get: () => count,
};
})();
counterModule.inc();
counterModule.inc();
console.log(counterModule.get()); // 2
// counterModule.count // undefined — private*/

function makeCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}
const counter1 = makeCounter();

const counter2 = makeCounter();

console.log(counter1()); 
console.log(counter1());
console.log(counter2()); 
console.log(counter2()); 
console.log(counter1()); 
console.log(counter1()); 






