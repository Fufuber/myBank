let customerName,age,monthlyIncome, balance, hasDebt;

customerName = "   FURKAN COLPAN   " ;
age = 24;
monthlyIncome = "45000";
balance = 15000;
hasDebt = false;

customerName = customerName.trim().toLowerCase();
let position = customerName.indexOf("colpan");

console.log(customerName)
console.log(position)
monthlyIncome = Number(monthlyIncome)


if (age<18) {
    console.log("Account rejected:Underage")
} else if (age>=18 && monthlyIncome>=20000) {
    console.log("Account approved")
} else if (age>=18 && monthlyIncome<20000) {
    console.log("Account rejected: Low income")
} 


// Task-2 


let deposit = (amount) => {

    if(amount>0) {
        balance = amount + balance
        return balance
    }  else if (amount<=0) {
        return "Invalid amount"
    }

}

console.log(deposit(5000))

let withdraw = (amount) => {
    if (amount<=0) { 
        return "Invalid Amount"
    } else if (amount>balance) {
        return "Insufficient balance"
    } return balance = balance - amount
 
}

console.log(withdraw(5000));
console.log(withdraw(20000));
console.log(withdraw(-500));
console.log(withdraw(3000));

const loanApplication = (age,monthlyIncome,hasDebt,loanAmount) => {
    if (age>=18 && !hasDebt && monthlyIncome>=20000 && loanAmount>0 && loanAmount <= 10 * monthlyIncome) {
        return "Loan approved"
    } else {
        return "Loan rejected"
    }
}

