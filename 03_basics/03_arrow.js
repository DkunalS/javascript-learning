//------Arrow, this keyword and object----------

//this keyword is used to refering the current context in the object
const user = {
    userName: "kunal",
    price: 199,

    welocomMsg : function(){
        console.log(`${this.userName}, Welcome to the website`)
        console.log(this)
    }

}

// user.welocomMsg()    // output=> kunal, Welcome to the website
// user.userName = "jassi" // context changed here
// user.welocomMsg()    // output=> jassi, Welcome to the website 

// if run on browser(attched engine) and in browser global object is window object it is accessable in the browser
console.log(this);   // output=> {}  b/c no global context present and standalone engine


// this context can access only in the object not in the function

// function coffee(){
//     console.log(this);  // various values can be access but this context can't be access 
// }                       //run it then various values will be printed

// function coffee(){
//     let userName = "kunal"
//     console.log(this.userName);  // output=> undefined (b/c not this not accessable in function)
// }

const coffee = () => {
    let userName = "kunal"
    console.log(this);  // output=> {} (b/c not this not accessable in function)
}
coffee()

//------------arrow function-------------
//syntax is  () => {} 

const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(5, 6));
