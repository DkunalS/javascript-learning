// There are mainly 2 types of datatypes
// Primitive - 1. it is call by value means no reference of memory, value is copied from variable 
//             2. 7 types - String, Number, Boolean, Null, Undefined, Symbol(for making unique value, used in front end), BigInt

const score = 100        // typeof of score is number
const score1 = 10.9      // typeof of score1 is number
const isLoggedIn = true  // typeof of isLoggedIn is Boolean
const temp = null        // typeof of temp is object
let userEmail;           // typeof of userEmail is undefined 

const bigIntvalue = 15646521548564515n  // typeof of bigIntValue is bigint
const id = Symbol('123')                // typeof of id is symbol
const anotherId = Symbol('123')         // typeof of id is symbol

console.log(id)
console.log(anotherId)
console.log(typeof id, typeof anotherId);
console.log(id === anotherId);

// Non Primitive- 1. Call by reference
//                2. Array, Objects, Functions

// Note - If you want to master in java script master in objects and browser events

const heros = ["shaktiman", "naagraj", "dooga"]     // typeof of heros is objects


let myObj = {

    name: "kunal",       // typeof of myObj is object
    age: 26
}

const myFunction = function() {
                                        // typeof of myFunctin is function
    console.log("Hello World");
}

console.log(typeof bigIntvalue);