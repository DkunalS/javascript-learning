let scoreNum = 55
let scoreStr = "55"
let scoreBool = true
let scoreNull = null

/*
 value of scoreNum is number but when we get the value from front end it is not guarantee that value will be number
 e.g. req.body(scoreNum)
 */

//  console.log(typeof scoreNum);  // output => number
//  console.log(typeof scoreStr);  // output => string
//  console.log(typeof scoreBool); // output => boolean
//  console.log(typeof scoreNull); // output => object

//Conversions

// 1 - scoreNum to others
 let scoreNumToString = String(scoreNum)
 console.log(typeof scoreNumToString)
 console.log(scoreNumToString)

 let scoreNumToBool = Boolean(scoreNum)
 console.log(scoreNumToBool)