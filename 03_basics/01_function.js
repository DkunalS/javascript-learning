

function myName(){
    console.log("My name is Kunal Sahu");
}

myName()

// In javascript not neccessary to define the datatypes
function addNumber(num1, num2){
    return num1 + num2
   
}

// addNumber(3, 4)    // output=> 7
// addNumber("3", 4)  // output=> 34
// addNumber(3, "4")  // output=> 34
// addNumber(3, null) // output=> 3

const result = addNumber(6, 5)
console.log(result);            //output=> 11

function loginUsrMsg(username = "manish"){  //here providing default value if no value passed if passed override
    if (!username) {   // we can use username === undefined
        console.log("Please enter the UserName");
        return
    } 
    return `${username} just logged in`
}

console.log(loginUsrMsg("kunal")) // output=> kunal just logged in
console.log(loginUsrMsg(""))    // output=> just logged in(if used username === undefined and incse of !username output=> undefined)
console.log(loginUsrMsg())    // output=> undefined


//-----------When we dont know how many argumnt will be come--------------
// like shopping cart (no of items can be anything)
// using the rest opertaor like  ...num1(storing value in the array)
// 

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 320)); // output=> [ 200, 400, 320 ]

//here first two argment storing in the var1, var2
function calculateCartPrice1(var1, var2, ...num1){
    return num1
}

console.log(calculateCartPrice1(200, 400, 320, 500)); // output=> [ 320, 500 ]


//passing objects in the function
const user = {
    username: "kunal",
    price: 1520
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user) // passing object through variable
// passing direct object
handleObject({
    username: "manish",
    price: 123
})

//passing the array in the function

const myArray = [200, 600, 852, 456]

function passingArray(getArray){
    return getArray[1]
}

console.log(passingArray(myArray));
