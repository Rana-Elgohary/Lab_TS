// 1-	Create array that accept  number only 
let arr = [];
arr.push(1);
// arr.push('d');
console.log(`Question1: ${arr}`);
// 2-	Create array that accept string and number only and print all items
let arr2 = [];
arr2.push(2);
arr2.push("Rana");
console.log(`Question2: ${arr2}`);
// 3-	Create a variable that accept number and Boolean only 
let variable1;
variable1 = 1;
console.log(`Question3: number ==> ${variable1}`);
variable1 = true;
console.log(`Question3: boolean ==> ${variable1}`);
// 4-	Create function with two parameter try to call it without any parameter “handling”
function fun1(x = 1, y = 2) {
    console.log(`Question4: default parameter ==> x = ${x}, y = ${y}`);
}
fun1();
function fun2(x, y) {
    if (x !== undefined)
        console.log(`Question4: Optional parameter ==> x = ${x}`);
    if (y !== undefined)
        console.log(`Question4: Optional parameter ==> y = ${y}`);
    if (x !== undefined && y !== undefined)
        console.log(`Question4: Optional parameter ==> x = ${x}, y = ${y}`);
    console.log(`Question4: Optional parameter ==> No data`);
}
fun2();
class Employee {
    constructor(id, name, username, email, street, suite, city, zipcode, lat, lng) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = {
            street: street,
            suite: suite,
            city: city,
            zipcode: zipcode,
            geo: {
                lat: lat,
                lng: lng
            }
        };
    }
}
const employee = new Employee(1, "Leanne Graham", 'Bret', "Sincere@april.biz", "Kulas Light", "Apt. 556", "Gwenborough", "92998-3874", "-37.3159", "81.1496");
console.log(`Question5: ${employee.name}`);
console.log(`Question5: ${employee.address.street}`);
// 6-	Create class manager inherit from employee class and Create a function to view employee address
class Manager extends Employee {
    constructor(id, name, username, email, street, suite, city, zipcode, lat, lng) {
        super(id, name, username, email, street, suite, city, zipcode, lat, lng);
    }
    GetAddress() {
        console.log(`Question6: ${this.address.street}`);
    }
}
let manager = new Manager(1, "Leanne Graham", 'Bret', "Sincere@april.biz", "Kulas Light", "Apt. 556", "Gwenborough", "92998-3874", "-37.3159", "81.1496");
manager.GetAddress();
class Account {
    addCustomer() {
        console.log("Added");
    }
    removeCustomer() {
        console.log("Removed");
    }
    debitAmount() {
        console.log("debitAmount");
    }
    creditAmount() {
        console.log("creditAmount");
    }
    getBalance() {
        console.log("getBalance");
    }
}
class Saving_Account extends Account {
}
class Current_Account extends Account {
}
