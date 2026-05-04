const user = { name: "Priya", age: 24, "favourite color": "blue" };

// Dot — clean
console.log(user.name);              
console.log(user.age);               

// Bracket — when key is dynamic
const field = "name";
console.log(user[field]);            

// Bracket — when key has spaces/special chars
console.log(user["favourite color"]); 

// Property doesn't exist? undefined — no error
console.log(user.email);            