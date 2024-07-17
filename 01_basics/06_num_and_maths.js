const score = 400
console.log(score);                     //outout=> 400

// Number object have various functions check in browser's console for more functions
const balance = new Number(100)
const balance1 = new Number(458.3505421)
const balance2 = new Number(652.2567568)
const balance3 = new Number(100000000000)
/*
console.log(balance);                   //output=> [Number: 100]
console.log(balance.toString());        //output=> 100 (num to string conversion)
console.log(balance.toString().length); //output=> 3

console.log(balance.toFixed(2));        //output=> 100.00 (to fix digits after decimal) 
console.log(balance1.toFixed(2));       //output=> 458.35
console.log(balance1.toFixed(3));       //output=> 458.351

// toPricision function - raqnge 1-21, returns String, precision on digits
console.log(balance2.toPrecision(2));   //output=> 6.5e+2
console.log(balance2.toPrecision(3));   //output=> 652
console.log(balance2.toPrecision(5));   //output=> 652.26

console.log(balance3.toLocaleString());         //output=> 100,000,000,000 (By default in US)
console.log(balance3.toLocaleString('en-IN'));  //output=> 1,00,00,00,00,000 (In indian format)

console.log(Number.MIN_VALUE);                  //output=> 5e-324
console.log(Number.MAX_VALUE);                  //output=> 1.7976931348623157e+308
console.log(Number.MIN_SAFE_INTEGER);           //output=> -9007199254740991
console.log(Number.MAX_SAFE_INTEGER);           //output=> 9007199254740991
console.log(Number.EPSILON);                    //output=> 2.220446049250313e-16
*/

//-----------------------------Maths--------------------------------------

//check more functions in browser's console
console.log(Math);           //output=> Object [Math] {}

console.log(Math.abs(5));     //output=> 5
console.log(Math.abs(5));     //output=> 5

console.log(Math.round(4.5));    //output=> 5 (to get roundoff value)
console.log(Math.round(5.6));    //output=> 6 
console.log(Math.round(9.3));    //output=> 9

console.log(Math.floor(6.6));    //output=> 6 (to get floor value)
console.log(Math.ceil(85.6));    //output=> 86 (to get ceiling value)

console.log(Math.sqrt(3));                   //output=> 1.7320508075688772 (to get florr value)
console.log(Math.sqrt(3).toPrecision(4));    //output=> 1.732 (to get florr value)

console.log(Math.pow(2, 5));          //output=> 2**5 = 32     
console.log(Math.pow(5, 2));          //output=> 5**2 = 25     

console.log(Math.min(5, 6, 9, 4, 2, 5));          //output=> 2     
console.log(Math.max(5, 6, 9, 4, 2, 5));          //output=> 9   

console.log(Math.random());                   // output=> between 0 and 1
console.log((Math.random()*10) + 1);          // output=> betewwn 1 and 9
console.log((Math.floor(Math.random()*10) + 1));          

const min = 10
const max = 20

// very important for the dice game or random number related games
console.log(Math.floor(Math.random() * (max - min + 1)) + min)  //values b/w from 11 to 20


