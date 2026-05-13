function kmToMiles(km) {
    return km * 0.621;
}

document.getElementById("homeworkOut1").textContent =
    "kmToMiles(10) → " +
    kmToMiles(10) +
    "\n" +
    "kmToMiles(100) → " +
    kmToMiles(100);



function gstAmount(price, rate = 18) {
    return price * (rate / 100);
}

document.getElementById("homeworkOut2").textContent =
    "gstAmount(1000) → " +
    gstAmount(1000) +
    "\n" +
    "gstAmount(1000, 12) → " +
    gstAmount(1000, 12);



function fullName(first, last) {
    return first + " " + last;
}

document.getElementById("homeworkOut3").textContent =
    'fullName("Sai", "Nandini") → ' +
    fullName("Sai", "Nandini");



function isAdult(age) {
    return age >= 18;
}

document.getElementById("homeworkOut4").textContent =
    "isAdult(20) → " +
    isAdult(20) +
    "\n" +
    "isAdult(15) → " +
    isAdult(15);



console.log(kmToMiles(10));
console.log(gstAmount(1000));
console.log(fullName("Sai", "Nandini"));
console.log(isAdult(20));