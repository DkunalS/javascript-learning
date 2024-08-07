
let curr_date = new Date();

console.log(curr_date);                         // output=> 2024-07-17T14:56:39.131Z
console.log(curr_date.toISOString());           // output=> 2024-07-17T15:14:33.154Z
console.log(curr_date.toJSON());                // output=> 2024-07-17T15:14:33.154Z

console.log(curr_date.toString());              // output=> Wed Jul 17 2024 14:59:24 GMT+0000 (Coordinated Universal Time)
console.log(curr_date.toLocaleString());        // output=> 7/17/2024, 3:00:03 PM (Date with Time)
console.log(curr_date.toLocaleDateString());    // output=> 7/17/2024           (only Date)
console.log(curr_date.toDateString());          // output=> Wed Jul 17 2024     (Date with the day)

console.log(curr_date.getDate());               // output=> 17
console.log(curr_date.getMonth());              // output=> 6 (Jul) (0-JAN, 11-DEC)
console.log(curr_date.getDay());                // output=> 3 (wed) (0-SUN, 7-SAT)
console.log(curr_date.getFullYear());           // output=> 2024

console.log(curr_date.toLocaleTimeString());    // output=> 3:26:15 PM (Only time)
console.log(curr_date.toTimeString());          // output=> 15:27:20 GMT+0000 (Coordinated Universal Time) 

console.log(curr_date.getHours());              // output=> 14
console.log(curr_date.getMinutes());            // output=> 58
console.log(curr_date.getMilliseconds());       // output=> 650


//-----------------------------------Set Date--------------------------------


let myCreatedDate = new Date(2024, 5, 30);            // YEAR, MONth, DAY (0-JAN, 11-DEC)
let myCreatedDate1 = new Date(2024, 5, 30, 12, 26);   // YEAR, MONth, DAY (0-JAN, 11-DEC)
let myCreatedDate2 = new Date('2024-05-30');          // YEAR, MONTH, DAY (0-JAN, 11-DEC)

console.log(myCreatedDate);
console.log(myCreatedDate.toLocaleString());        // output=> 6/30/2024, 12:00:00 AM
console.log(myCreatedDate1.toLocaleString());       // output=> 6/30/2024, 12:26:00 PM
console.log(myCreatedDate2.toLocaleString());       // output=> 5/30/2024, 12:00:00 AM

//-------------------------TimeStamp--------------------------
// use for the Quizes, Polls, Hotel date booking

let myTimeStamp = Date.now();          //Current time

console.log(myTimeStamp);              
console.log(myCreatedDate.getTime());  // getting the time in milisecond

console.log(Math.floor(Date.now()/1000));  //Converted from milisecond to second

//--------------------------LocaleString-------------------

let customLocaleString = curr_date.toLocaleString('default',{
    weekday: "long", timeZoneName: "long", era: "long", year: "numeric"
} )

console.log(customLocaleString);