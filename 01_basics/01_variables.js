// It can be used for the getting the data of the user from the website 


const accountId = 1235
let accountEmail = "kunal@google.com"
var passwd = "123456" 
/* 
var was introduced earlier version of JavaScript but it has the issue of block scope functional scope 
but in latest version there is use of only let to define the variables
*/
accountCity = "Indore" // this type of variable define not prefered to use although we can define in this way also
let accountState; // in this case variable is undefined because no value assigned to it


console.log("Initial Values");
console.table([accountId, accountEmail, passwd, accountCity, accountState]);

//accountId = 1253 // not Allowed to change because of constant
accountEmail = "sahu@google.com"
passwd = "258963"
accountCity = "Gwaliior"

console.log("Values after Changing");

console.table([accountId, accountEmail, passwd, accountCity, accountState]);