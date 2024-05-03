let scoreNum = 55
let scoreStr = "55"
let scoreStrNum = "55kunal"
let scoreBool = true
let scoreNull = null
let scoreUndefined;
let scoreEmpty =""

/*
 value of scoreNum is number but when we get the value from front end it is not guarantee that value will be number
 e.g. req.body(scoreNum)
 */

 console.log(typeof scoreNum);           // output => number
 console.log(typeof scoreStr);           // output => string
 console.log(typeof scoreStrNum);        // output => string
 console.log(typeof scoreBool);          // output => boolean
 console.log(typeof scoreNull);          // output => object
 console.log(typeof scoreUndefined);     // output => undefined


//Conversions

// 1 - scoreNum to others

// Number to String
 let scoreNumToString = String(scoreNum)
 console.log(typeof scoreNumToString)       // output => string
 console.log(scoreNumToString)              // output => 55

//Number to Boolean
 let scoreNumToBool = Boolean(scoreNum)     
 console.log(typeof scoreNumToBool)         // output => boolean
 console.log(scoreNumToBool)                // output => true

// 2 - scoreStr to others

// String to Number
 let scoreStrToNum = Number(scoreStr)
 console.log(typeof scoreStrToNum)          // output => number
 console.log(scoreStrToNum)                 // output => 55

 // String to Boolean
 let scoreStrToBool = Boolean(scoreStr)
 console.log(typeof scoreStrToBool)         // output => boolean
 console.log(scoreStrToBool)                // output => true


// 3 - scoreStrNum to others

// StringNum to Number
let scoreStrNumToNum = Number(scoreStrNum)
console.log(typeof scoreStrNumToNum)          // output => number
console.log(scoreStrNumToNum)                 // output => NaN (Not an Number)

// String to Boolean
let scoreStrNumToBool = Boolean(scoreStrNum)
console.log(typeof scoreStrNumToBool)         // output => boolean
console.log(scoreStrNumToBool)                // output => true


// 4 - scoreBool to others

// Boolean to Number
let scoreBoolToNum = Number(scoreBool)
console.log(typeof scoreBoolToNum)          // output => number
console.log(scoreBoolToNum)                 // output => 1

// Boolean to String
let scoreBoolToString = String(scoreBool)
console.log(typeof scoreBoolToString)         // output => string
console.log(scoreBoolToString)                // output => true


// 5 - scoreNull to others

// Null to Number
let scoreNullToNum = Number(scoreNull)
console.log(typeof scoreNullToNum)          // output => number
console.log(scoreNullToNum)                 // output => 0

// Null to String
let scoreNullToString = String(scoreNull)
console.log(typeof scoreNullToString)         // output => string
console.log(scoreNullToString)                // output => null

// Null to Boolean
let scoreNullToBool = Boolean(scoreNull)
console.log(typeof scoreNullToBool)         // output => Boolean
console.log(scoreNullToBool)                // output => false


// 6 - undefined to others

// Undefined to Number
let scoreUndefinedToNum = Number(scoreUndefined)
console.log(typeof scoreUndefinedToNum)          // output => number
console.log(scoreUndefinedToNum)                 // output => NaN

// Undefined to String
let scoreUndefinedToString = String(scoreNull)
console.log(typeof scoreUndefinedToString)         // output => string
console.log(scoreUndefinedToString)                // output => null

// Undefined to Boolean
let scoreUndefinedToBool = Boolean(scoreUndefined)
console.log(typeof scoreUndefinedToBool)          // output => boolean
console.log(scoreUndefinedToBool)                 // output => false


// 7- empty string

// Empty to String
let scoreEmptyToString = String(scoreEmpty)
console.log(typeof scoreEmptyToString)              // output => String
console.log(scoreEmptyToString)                     // ouitput=> 

// Empty to Number
let scoreEmptyToNumber = Number(scoreEmpty)
console.log(typeof scoreEmptyToNumber)              // output => number
console.log(scoreEmptyToNumber)                     // output => 0

// Empty to boolean
let scoreEmptyToBoolean = Boolean(scoreEmpty)
console.log(typeof scoreEmptyToBoolean)              // output => boolean
console.log(scoreEmptyToBoolean)                     // output => false

