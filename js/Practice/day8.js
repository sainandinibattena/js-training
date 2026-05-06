
const bankAccount = {
  holder: "Aarav",
  balance: 5000,

  deposit(amount) {

    this.balance = this.balance + amount;
    return this.balance;
  },


  withdraw(amount) {

    if (this.balance >= amount) {

      this.balance = this.balance - amount;

      return this.balance;

    } else {
      return "Insufficient funds";
    }
  }
};


console.log(bankAccount.deposit(1000));   
console.log(bankAccount.withdraw(2000));  
console.log(bankAccount.withdraw(10000)); 