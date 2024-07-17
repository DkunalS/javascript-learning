
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


//-----------------------------------









