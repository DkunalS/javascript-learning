/*
console.log(2 > 1)
console.log(2 < 1)
console.log(2 >= 1)
console.log(2 <= 1)
console.log(2 == 1)
console.log(2 != 1)
console.log();
*/

//these comparisons not prefered

console.log("2" > 1);        // here is type conversion is happening
console.log("02" > 1);
console.log();

//The reason is that an equality check == and comparison > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0 that's why null >= 0 is true and null > 0 is false.
console.log(null > 0);        // in the case of null, > and == work normally because null is worked diifently
console.log(null == 0);       // In both the cases output are false
console.log(null >= 0);       // in case of >= is behave differently, output will be true


console.log();             // in all cases output will be false
console.log(undefined == 0);   
console.log(undefined > 0);
console.log(undefined >= 0);
console.log(undefined < 0);
console.log(undefined <= 0);



// === Strict comparison - it check not only vale but also data type

console.log("2" === 2);