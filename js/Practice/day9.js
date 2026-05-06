
const showInfo = ({ name = "Guest", role = "User" } = {}) =>
  `${role}: ${name}`;
console.log(showInfo());                // User: Guest
console.log(showInfo({ name: "Riya" })); // User: Riya
console.log(showInfo({role : "admin"}));



