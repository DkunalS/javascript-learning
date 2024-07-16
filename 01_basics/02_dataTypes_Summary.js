// There are mainly 2 types of datatypes - on the basis of how the data is stored in the memory and accessed

// Primitive - 1. it is call by value means no reference of memory, value is copied into variable from the memory
//             2. 7 types - String, Number, Boolean, Null, Undefined, Symbol(for making unique value, used in front end), BigInt

const score = 100        // typeof of score is number
const score1 = 10.9      // typeof of score1 is number
const isLoggedIn = true  // typeof of isLoggedIn is Boolean
const temp = null        // typeof of temp is object
let userEmail;           // typeof of userEmail is undefined 

const bigIntvalue = 15646521548564515n  // typeof of bigIntValue is bigint

console.log(typeof bigIntvalue);

// Symbol practical
const id = Symbol('123')                // typeof of id is symbol
const anotherId = Symbol('123')         // typeof of id is symbol

console.log(id)
console.log(anotherId)
console.log(typeof id, typeof anotherId);
console.log(id === anotherId);          // Strict Comparison

// Non Primitive- 1. Call by reference
//                2. Array, Objects, Functions

// Note - If you want to master in java script master in objects and browser web events


// Array
const heros = ["shaktiman", "naagraj", "dooga"]     // typeof of heros is objects

console.log("type of heros is "+ typeof heros)

// Objects
let myObj = {

    name: "kunal",       // typeof of myObj is object
    age: 26              // data type can be anything number, string, boolean, array     and even object
}

console.log("type of myobject is "+ typeof myObj)

// Function (treat as a variable)
const myFunction = function() {
                                        // typeof of myFunction is function
    console.log("Hello World");
}

console.log("type of myFunction is  "+ typeof myFunction)



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 // Stack and Heap Memory

 // primitive datatype uses the stack memory and non-primitive datatype uses the heap memory

 let name1 = "kunalsahu"
 let name2 = name1

 console.log(name1);
 console.log(name2);
 
 name2 = "somisahu"
 console.log(name1);
 console.log(name2);


 // Non-primitive
 let user = {
    name: "kunal",
    email: "kunal@google.com"
 }

 let user1 = user

 user1.email = "kunal@gmail.com"
  console.log(user1.email);
  console.log(user.email);