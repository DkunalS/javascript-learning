const name = "jassi"
const stream = "political science"


console.log("Hello "+ name + " preparing for " + stream); // this type of comncatination is not prefered 

console.log(`Hello! His name is ${name} and he is preparing for UGC NET in ${stream} stream`); // now this is pefered

// string functions

 const indexAndValue = new String("rang-de-basanti")
 const stringFunctions = new String("baar baar dekho")
 const stringFunForTrim = new String("   Andaaz   Apna   Apna   ")
 let stringOpsForPad = new String("life in a metro")

//  console.log(indexAndValue.charAt(5));      // output=> d
//  console.log(indexAndValue.charAt(16));     // output=> 
//  console.log(indexAndValue.indexOf('h'));   // output=> -1
//  console.log(indexAndValue.indexOf('b'));   // output=> 8
 console.log(indexAndValue.lastIndexOf('a') ); // output=> 11
 console.log(indexAndValue.lastIndexOf('de'))  // output=> 5
 console.log(stringFunctions.lastIndexOf('ar')); // output=> 7

 console.log(stringFunctions.length);          // output=> 15
 
 console.log(indexAndValue.includes('sa'))     // ouput=> true

 console.log(indexAndValue.substring(2,6));      // output => ng-d
 console.log(indexAndValue.slice(5,10));         // output=> de-ba 
 // Note- it indicate the character upto but not the indicate last index 10 is not included in substring and slice

 console.log(indexAndValue.trim());           // output=> rang-de-basanti (it works only on whitesapces)
 
 console.log(stringFunForTrim.trim());        // output=> Andaaz   Apna   Apna

 console.log(stringFunctions.split(' '))      // output=> [ 'baar', 'baar', 'dekho' ]
 console.log(indexAndValue.split('-'));       // output=> [ 'rang', 'de', 'basanti' ]

 console.log(indexAndValue.endsWith('ant'));  // output=> false
 console.log(indexAndValue.endsWith('anti')); // output=> true

 console.log(stringOpsForPad.padEnd(31, ' new'));  // output=> life in a metro new new new new
 console.log(stringFunctions.padStart(30, 'kyun ')); // output=> kyun kyun kyun baar baar dekho

 console.log(stringFunctions.toLowerCase());
 console.log(stringFunctions.toUpperCase());

 console.log(stringFunctions.replace('baar', 'ek'));  // output=> ek baar dekho

 console.log(stringFunctions.repeat(3));      // output=> baar baar dekhobaar baar dekhobaar baar dekho