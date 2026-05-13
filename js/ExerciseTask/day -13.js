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