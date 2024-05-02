"use strict" // treat all the JS code as newer version although now all the code is considered as the newer JS code

// alert(3 + 2) // it will work in browser and we are using the nodejs, so it is not running on the browser

/*
 There are 2 Documentation 1. MDN (it is of mozila)- it simple documentaion which ca be followed
 2.ECMA script https://tc39.es/ecma262/ - To standardize the the JS code because in earlier days everyone had 
 their own standards for JS like different browser and different standards so it was tricky to follow the proper one standard.
 The JS community sit togather and wrote minimum standard for JS code like- how to take input, how functions should be write, etc
 */


 let name = "kunal"
 let age = 25
 let isAvailble = false
 let state;
 let check = null

 /*
 DATA TYPES
 number => 2 to the power 53
 bigint => 
 string => ""
 boolean => true/false
 null => standalone value, special type and it can be defined, reprentation of empty value
 undefined => variable declared but value is not assigned
 symbol => to find the uniqueness 

 */


 console.log(typeof name)
 console.log(typeof age)
 console.log(typeof isAvailble)
 console.log(typeof state)  // output undefined
 console.log(typeof undefined)  // output undefined
 console.log(typeof null)  // output object
 console.log(typeof check)  // output object