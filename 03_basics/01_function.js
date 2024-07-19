

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
