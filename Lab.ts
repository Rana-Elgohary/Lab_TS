// 1-	Create array that accept  number only 
let arr : number[] = [];
arr.push(1);
// arr.push('d');
console.log(`Question1: ${arr}`);


// 2-	Create array that accept string and number only and print all items
let arr2 : (number | string) [] = [];
arr2.push(2);
arr2.push("Rana");
console.log(`Question2: ${arr2}`);


// 3-	Create a variable that accept number and Boolean only 
let variable1: number | boolean;
variable1 = 1;
console.log(`Question3: number ==> ${variable1}`)
variable1 = true;
console.log(`Question3: boolean ==> ${variable1}`)


// 4-	Create function with two parameter try to call it without any parameter “handling”
function fun1(x : number = 1, y : number = 2){
    console.log(`Question4: default parameter ==> x = ${x}, y = ${y}`);
}
fun1();

function fun2(x ?: number, y ?: number){
    if(x !== undefined)
        console.log(`Question4: Optional parameter ==> x = ${x}`)
    if(y !== undefined)
        console.log(`Question4: Optional parameter ==> y = ${y}`)
    if(x !== undefined && y !== undefined)
        console.log(`Question4: Optional parameter ==> x = ${x}, y = ${y}`)
    console.log(`Question4: Optional parameter ==> No data`);
}
fun2();


// 5-	Create class Employee implement IEmployee using this object as implementation
//  {"id": 1,"name": "Leanne Graham","username": "Bret","email": "Sincere@april.biz","address": {"street": "Kulas Light","suite": "Apt. 556","city": "Gwenborough","zipcode": "92998-3874","geo": {"lat": "-37.3159","lng": "81.1496"}}
// a.	Username private
// b.	Address public
interface IEmployee {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
}

class Employee implements IEmployee{
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };

    constructor(
        id: number,
        name: string,
        username: string,
        email: string,
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        lat: string,
        lng: string
    ) {
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

const employee = new Employee(
    1,
    "Leanne Graham",
    'Bret',
    "Sincere@april.biz",
    "Kulas Light",
    "Apt. 556",
    "Gwenborough",
    "92998-3874",
    "-37.3159",
    "81.1496");
console.log(`Question5: ${employee.name}`);
console.log(`Question5: ${employee.address.street}`);

// 6-	Create class manager inherit from employee class and Create a function to view employee address
class Manager extends Employee{
    constructor(id: number,
        name: string,
        username: string,
        email: string,
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        lat: string,
        lng: string){
        super(id, name, username, email, street, suite, city, zipcode, lat, lng);
    }
    GetAddress(){
        console.log(`Question6: ${this.address.street}`)
    }
}

let manager = new Manager(
    1,
    "Leanne Graham",
    'Bret',
    "Sincere@april.biz",
    "Kulas Light",
    "Apt. 556",
    "Gwenborough",
    "92998-3874",
    "-37.3159",
    "81.1496"
);
manager.GetAddress();


// 7-	Implement the following diagram 
interface IAccount{
    Date_of_opening: Date;
    addCustomer()
    removeCustomer()
}

class Account implements IAccount{
    Date_of_opening: Date;
    addCustomer(){
        console.log("Added");
    }
    removeCustomer(){
        console.log("Removed");
    }

    Acc_no: number;
    Balance: number;
    debitAmount(){
        console.log("debitAmount");
    }
    creditAmount(){
        console.log("creditAmount");
    }
    getBalance(){
        console.log("getBalance");
    }
}

class Saving_Account extends Account implements IAccount{
    Min_Balance: number;
}

class Current_Account extends Account implements IAccount{
    Interest_Rate: number;
}