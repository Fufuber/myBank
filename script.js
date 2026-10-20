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