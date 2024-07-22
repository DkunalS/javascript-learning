/*------------ Immediately Invoked Function Expreesion---------------
  1. execute function immmeditely after writing or starting 
  2. ex- a. establish database connection
         b. don't want to access the global variable in function

         interview-
         1. function which execute immediately
         2. to protecting a function from global scope varible and function pollution 
*/

// normal function
// function dbConnection(){
//     console.log("DB Connected");
// }
// dbConnection()


// IIFE function  
// interview - 
// 1st () for function defintion and 2nd () for execution call
// also called named iife function
(function dbConnection(){
    console.log("DB Connected");
})();    // IFFE function invokes immediately but it doesn't know that where context have to stop
// and to stop it we use terminator ; sign

// IIFE function with the arrow function
( () => {
    console.log("DB Connected Successfully");
} )();

// IIFE with arrow function and passing argument
( (name) => {
    console.log(`Connected Successfully to ${name}`);
} )("Oracle")


