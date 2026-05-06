// Task 1: Template Literal Sentence Builder

const item = "Laptop";
const price = 60000;
const tax = 0.18;

const result = `The ${item} costs ₹${price} + ₹${price * tax} GST = ₹${price + (price * tax)}.`;

console.log(result);

// Multiline version
const multi = `Item: ${item}
Price: ₹${price}
GST: ₹${price * tax}
Total: ₹${price + (price * tax)}`;

console.log(multi);


// Task 2: Destructuring

// Array
const scores = [88, 75, 92, 60, 45];

const [top, second, ...others] = scores;

console.log(top);      
console.log(second);   
console.log(others);   

// Object
const user = {
    name: "Anaya",
    age: 21,
    address: {
        city: "Jaipur",
        pincode: "302001"
    }
};

const { name, age: userAge, address: { city } } = user;

console.log(name);
console.log(userAge);
console.log(city);


// Task 3: Rest Parameters

function sumAll(...numbers) {
    return numbers.reduce((acc, n) => acc + n, 0);
}

console.log(sumAll(1, 2, 3));           
console.log(sumAll(10, 20, 30, 40));    
console.log(sumAll());                  


function joinNames(separator, ...names) {
    return names.join(separator);
}

console.log(joinNames(", ", "Priya", "Aarav", "Riya"));

// Bonus: Spread

const defaults = {
    theme: "light",
    lang: "en",
    notifications: true
};

const userPrefs = {
    theme: "dark",
    fontSize: 16
};

const final = { ...defaults, ...userPrefs };

console.log(final);

function applyPrefs(defaults, prefs) {
    return { ...defaults, ...prefs };
}

console.log(applyPrefs(defaults, userPrefs));

//---------------------HOME WORK-----------------
//HW1

const person = {
    first: "Priya",
    last: "Sharma",
    city: "Jaipur"
};

const sentence = `${person.first} ${person.last} from ${person.city}`;

console.log(sentence);

//HW2

const arr = [1, 2, 3, 4, 5, 6];

const [head, ...tail] = arr;

console.log(head); 
console.log(tail); 

//HW3

function multiply(...nums) {
    return nums.reduce((acc, n) => acc * n, 1);
}

console.log(multiply(2, 3, 4)); 
console.log(multiply(5, 2));    
console.log(multiply());        

//HW4

const original = {
    name: "Priya",
    age: 24
};

const updated = { ...original, age: 25 };

console.log(original); 
console.log(updated);  