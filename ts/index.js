//~ node download --> npm i typescript -g --> tsc -v
//~ tsc --watch index.ts --> es5 
//~ tsc --watch index.ts --target es6 --> es6
// function x(){} //es5 --> classic js 
// x.prototype.fun = function(){}
// class x{ //es6 
//     fun(){
//     }
// }
//^ Type Annotation 
let x;
x = 1;
//! x=""
let x1; //? union
x1 = 2;
x1 = "";
//! x1=true;
let x2 = 3;
//!x2="";
let x3; //? act like js syntax
x3 = 2;
x3 = "";
x3 = true;
console.log(x3);
//* Arrays 
let arr1 = [1, 2, 3];
// !arr1.push("")
let arr2 = [1, 2, 3]; //? generic
let arr3;
arr3 = 3;
arr3 = ["a"];
//! arr3=true
let arr4;
arr4 = [1, "a", true];
let r;
r = [1, 2, 3, 4];
let arr5; //? js syntax "tuple"
arr5 = [1, "u", true, [2, 4, 6]];
let arr6;
arr6 = [1, 2, 4];
arr6 = ["a", "b"];
let arr7;
arr7 = [1, 2, "a", "b", true];
let arr8; //? empty array
arr8 = [];
// arr8.push(true)
let obj1;
obj1 = {
    id: 1,
    name: ""
};
let obj2;
obj2 = [
    {
        id: 2,
        fname: ""
    },
    {
        id: 2,
        fname: ""
    },
    {
        id: 2,
        fname: ""
    },
];
//^ Functions 
function Greeting(person) {
    return "hello" + person;
}
Greeting("ali");
function Greeting1(person) {
    console.log(person);
}
Greeting1("");
//^ defualt params
function Sum(x1 = 0, x2 = 0) {
    return x1 + x2;
}
Sum(1);
//^ optional params
function Sub(x1, x2) {
    if (x2 !== undefined && x1 !== undefined)
        return x1 - x2;
    if (x1 !== undefined)
        return x1;
    return;
}
Sub();
function Test(x, y, z) {
    if (y !== undefined)
        console.log(y);
    if (z !== undefined)
        console.log(z);
    console.log(x);
}
Test("a");
Test("a", '3');
Test("a", 3, '8');
function Add(...num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        // if(typeof num[i] === 'number'){
        // }
        sum += num[i];
    }
    console.log(sum);
}
Add(1, 8, 9);
//^ Enum --> organize collection of related values
var Colors;
(function (Colors) {
    Colors[Colors["red"] = 0] = "red";
    Colors[Colors["green"] = 1] = "green";
    Colors[Colors["blue"] = 2] = "blue";
})(Colors || (Colors = {}));
let bgColor;
bgColor = Colors.green;
//^ Generics 
function genericFun(param) {
    let arr = [];
    arr.push(param);
    return arr;
}
let arrOfstr = genericFun("a");
console.log(arrOfstr[0]);
let arrOfnum = genericFun(123);
class Car {
    // engine:string;  //? public
    constructor(engine) {
        this.engine = engine;
        //    this.engine = e
    }
    display() {
        console.log(this.engine);
    }
}
let C1 = new Car("e1");
C1.display();
class Verna extends Car {
    constructor(engine, model) {
        super(engine);
        this.model = model;
    }
    display() {
        console.log(this.engine, this.model);
    }
}
let v1 = new Verna("e2", 123);
v1.display();
class person {
    constructor() {
        this.age = 7;
    }
    syHi() {
        return "hi";
    }
    ;
}
class Human {
}
let obj = {
    id: 2,
    name: ""
};
const user1 = "bbmnm";
const user2 = 5476578;
let p = {
    id: 2234,
    age: 876,
    fname: "",
    lname: ""
};
const course = {
    "html": {
        professor: "ali",
        room: 345,
    },
    "js": {
        professor: "omar",
        room: 576
    }
};
let crs = {
    professor: "kl",
    room: 45
};
let user = {
    username: "ali",
};
user.username = "omar";
let userr = {
    id: 1,
    password: 123
};
//! userr.id= 10
//& Type Assertion
//? <> / as "latest version"  --> explicity casting 
let ar = [1, 2, 3];
//! ar.push(4)
// let o:interface as {}
