// Day 6 Tasks

// 1. kmToMiles
function kmToMiles(km) {
  return km * 0.621;
}

console.log(kmToMiles(10)); 


// 2. gstAmount
function gstAmount(price, rate = 18) {
  return (price * rate) / 100;
}

console.log(gstAmount(1000)); 


// 3. fullName
function fullName(first, last) {
  return first + " " + last;
}

console.log(fullName("Sai", "Nandini")); 


// 4. isAdult
function isAdult(age) {
  return age >= 18;
}

console.log(isAdult(20)); 
console.log(isAdult(15)); 