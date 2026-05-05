// --------------TASK 1 ----------  Build a Student Object

const student = {
    name : "Anaya" ,
    age : 21, 
    city : "Jaipur", 
    course : "B.Tech", 
    marks : [90,80,70]
}


console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.marks[0]);

student.email  = "anaya@example.com";
student.age = 22;
delete student.city;
console.log(student);

//-----------------------TASK2----------- Method with this

const bankAccount = {
    holder : "Aarav",
    balance : 5000,

    Deposite(amount){
        return `deposited amount is ${this.balance + amount}`;
     
    },
    withdraw(amount){
        if(this.balance>amount){
            return `withdrawl amount is ${this.balance - amount}`;
        }
            return "Insufficient funds";
    }
}
    console.log(bankAccount.Deposite(10000));
    console.log(bankAccount.withdraw(2000));


//--------------------TASK3------------------Destructuring

const product = { 
    id: 101, 
    name: "Laptop", 
    price: 60000, 
    brand: "Dell", 
    stock: 5 
};
const {name,price} = product;
console.log("name: ", name);
console.log("price: ",price);

const {brand:make} = product;
console.log("make: ", make);

const{warranty = "1 year"} = product;
console.log("warranty: ", warranty);

//--------------------------BONUS-------------Object as Iterable

console.log(Object.keys(student));

console.log(Object.values(student));

Object.entries(student).forEach(([key,value]) =>{
    console.log(`${key} : ${value}`);
})

console.log("Total properties:", Object.keys(student).length);

//------------------------HOME WORK-------------------------

const book = {
    title: "Atomic Habits",
    author: "James Clear",
    year: 2018,
    pages: 320
};

// bracket notation using variable key
const key = "title";
console.log("Title:", book[key]);


// -------- Add summary() method --------

book.summary = function() {
    return `${this.title} by ${this.author} (${this.year})`;
};

console.log("Summary:", book.summary());


// -------- Use Object.entries + forEach --------

Object.entries(book).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});


// --------  Copy object using spread --------

const bookCopy = { ...book };

// modify copy
bookCopy.year = 2020;
bookCopy.title = "Atomic Habits - Updated";

// verify original is unchanged
console.log("Original Book:", book);
console.log("Modified Copy:", bookCopy);