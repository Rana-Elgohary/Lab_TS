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
let x: number;
x = 1;
//! x=""
let x1: number | string;  //? union
x1 = 2;
x1 = "";
//! x1=true;
let x2 = 3;
//!x2="";
let x3: any;  //? act like js syntax
x3 = 2;
x3 = "";
x3 = true;
console.log(x3);

//* Arrays 
let arr1: number[] = [1, 2, 3];
// !arr1.push("")
let arr2: Array<number> = [1, 2, 3]; //? generic

let arr3: number | string[];
arr3 = 3
arr3 = ["a"];
//! arr3=true

let arr4: [number, string, boolean];
arr4 = [1, "a", true];

let r: [number, number, number, number];
r = [1, 2, 3, 4]

let arr5: any[];  //? js syntax "tuple"
arr5 = [1, "u", true, [2, 4, 6]];

let arr6: number[] | string[];
arr6 = [1, 2, 4];
arr6 = ["a", "b"];

let arr7: (string | number | boolean)[];
arr7 = [1, 2, "a", "b", true];

let arr8: [];  //? empty array
arr8 = [];
// arr8.push(true)

let obj1: { id: number, name: string };
obj1 = {
    id: 1,
    name: ""
}

let obj2: { id: number, fname: string }[];
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
function Greeting(person: string): string {
    return "hello" + person
}
Greeting("ali");

function Greeting1(person: string): void {
    console.log(person);

}
Greeting1("");
//^ defualt params
function Sum(x1: number = 0, x2: number = 0): number {
    return x1 + x2;
}
Sum(1);
//^ optional params
function Sub(x1?: number, x2?: number): any {
    if (x2 !== undefined && x1 !== undefined) return x1 - x2;
    if (x1 !== undefined) return x1;
    return;
}
Sub();

//^ function overloading
function Test(s1: string): void;
function Test(s1: string, s2: number): void;
function Test(s1: string, s2: string): void;
function Test(s1: string, s2: number, s3: string): void;

function Test(x: string, y?: number | string, z?: string): void {
    if (y !== undefined) console.log(y);
    if (z !== undefined) console.log(z);
    console.log(x);
}

Test("a");
Test("a", '3');
Test("a", 3, '8');

function Add(...num:number[]):void{
    let sum = 0;
    for(let i=0;i<num.length;i++){
        // if(typeof num[i] === 'number'){
        // }
        sum += num[i];
    }
    console.log(sum);
    
}
Add(1,8,9);

//^ Enum --> organize collection of related values
enum Colors{
    red,
    green,
    blue
}

let bgColor:Colors;
bgColor = Colors.green;

//^ Generics 
function genericFun<T>(param:T):T[]{
    let arr:T[]=[];
    arr.push(param);
    return arr;
}

let arrOfstr = genericFun<string>("a");
console.log(arrOfstr[0]);
let arrOfnum = genericFun<number>(123);

class Car {
    private chasisNum:number;
    protected motorNum:number;
    // engine:string;  //? public
    constructor(public engine:string){
    //    this.engine = e
    }
    display(){
        console.log(this.engine);
        
    }
}

let C1 = new Car("e1");
C1.display();

class Verna extends Car{
    public model:number
    constructor(engine:string, model:number){
        super(engine);
        this.model = model;
    }
    display(): void {
        console.log(this.engine , this.model);
        
    }
}

let v1 = new Verna("e2",123);
v1.display();

//* ts allow single inheritance and multi-level inheritance
//* but not allow multiple inheritance 


//^ interface --> objs define vars and funs without body "abstract methods"
interface IPerson1{
    fname:string,
    lname:string,
    syHi:()=>string
}
interface IPerson2{
    age?:number,
    address:string
}
class person implements IPerson1,IPerson2{
    fname: string;
    lname: string;
    address: string;
    age?: number | undefined =7;
    syHi():string{
        return "hi"
    };
}

abstract class Human{

}

// let h = new Human()

interface xx{
    id:number
}
interface xx{
    name:string
}
let obj : xx ={
    id:2,
    name:""
}

// type a = {
//     name:string
// }
// type a = {
//     address:string
// }
type userId = string | number;
const user1:userId = "bbmnm";
const user2:userId = 5476578;

type person1 = {
    id:number,
    age:number
}
 type person2 = {
    fname:string,
    lname:string
 }

 type personInfo = person1 & person2;
 let p:personInfo = {
    id:2234,
    age:876,
    fname:"",
    lname:""
 }

 //& Record --> model dictionaries to fixed nums of keys
type courses = "html"|"js";
interface crsInfo {
    professor:string,
    room:number
}
const course : Record<courses,crsInfo> = {
    "html":{
        professor:"ali",
        room:345,
    },
    "js":{
        professor:"omar",
        room:576
    }
  
}

//& Pick --> model dictionaries to specific nums of keys
type crrsInfo = {
    professor:string,
    room:number,
    students:string[]
}

// type configureCrs = Pick<crrsInfo,"professor"|"room">;
//& Omit --> model dictionaries to without specific nums of keys
type configureCrs = Omit<crrsInfo,"students">;
let crs:configureCrs = {
    professor:"kl",
    room:45
}

//& partial 
type User={
    username:string,
    email:string,
    password:string
}
type UserAge={
    age:number
}

type Mix = User & UserAge ;
type PartialUser = Partial<User>;
let user:PartialUser = {
    username:"ali",
}
user.username = "omar"

//& Required --> defualt 
//& ReadOnly 
type Userr = {
    id:number,
    password:number
}
type ReadonlyUserr = Readonly<Userr>
let userr: ReadonlyUserr = {
    id:1,
    password:123
}
//! userr.id= 10
//& Type Assertion
//? <> / as "latest version"  --> explicity casting 
let ar = [1,2,3] as const;
//! ar.push(4)
// let o:interface as {}














