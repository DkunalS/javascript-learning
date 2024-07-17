const name = "jassi"
const stream = "political science"


console.log("Hello "+ name + " preparing for " + stream); // this type of comncatination is not prefered 
// it is modern way of concatination(also called string interpolation)
console.log(`Hello! His name is ${name} and he is preparing for UGC NET in ${stream} stream`); // now this is pefered

// string functions

 const indexAndValue = new String("rang-de-basanti") 
 const stringFunctions = new String("baar baar dekho")
 const stringFunForTrim = new String("   Andaaz   Apna   Apna   ")
 let stringOpsForPad = new String("life in a metro")

 console.log(indexAndValue[0]);
 console.log(indexAndValue.length);
 console.log(indexAndValue.toUpperCase());
 console.log(indexAndValue.substring(1, 5));   // output=> ang-  not include last index
 console.log(indexAndValue.slice(5, 10));      // output=> de-ba  last index not included
 console.log(indexAndValue.slice(-15, 5));     // output=> rang-  b/c index(0 == -15) start from 0

//  console.log(indexAndValue.charAt(5));      // output=> d
//  console.log(indexAndValue.charAt(16));     // output=>     b/c 16 index is not found
//  console.log(indexAndValue.indexOf('h'));   // output=> -1  b/c not found
//  console.log(indexAndValue.indexOf(' '));   // output=> -1  b/c not found

//  console.log(indexAndValue.indexOf('b'));   // output=> 8   
 console.log(indexAndValue.lastIndexOf('a') ); // output=> 11
 console.log(indexAndValue.lastIndexOf('de'))  // output=> 5

 console.log(stringFunctions.indexOf('ar'));     // output=> 2
 console.log(stringFunctions.lastIndexOf('ar')); // output=> 7

 console.log(stringFunctions.length);          // output=> 15
 
 console.log(indexAndValue.includes('sa'))     // ouput=> true  asking the questions

 console.log(indexAndValue.substring(2,6));      // output => ng-d
 console.log(indexAndValue.slice(5,10));         // output=> de-ba 
 // Note- it indicate the character upto but not the indicate last index 10 is not included in substring and slice

 console.log(indexAndValue.trim());           // output=> rang-de-basanti (it works only on whitesapces)
 
 console.log(stringFunForTrim.trim());        // output=> Andaaz   Apna   Apna (trim removes the starting and ending whitespaces)
 console.log(stringFunForTrim.trimStart());   // output=> Andaaz   Apna   Apna    (trimStart removes the starting whitespaces)   Apna
 console.log(stringFunForTrim.trimEnd());     // output=>    Andaaz   Apna   Apna (trimEnd removes the ending whitespaces)   Apna

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