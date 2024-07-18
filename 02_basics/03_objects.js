// objects can be declared in two ways 
// 1- Literal  and 
//2- constructor (singleton) object.create

//object literals - Declaration
//it is in key value pair

//Declaring the symbol
const mySymbol = Symbol("key")
//object declaration
const jsUser = {
    name: "kunal",              // here JS automatically name consider as "name"
    "full name": "kunal sahu",  // here we are explicitly defining
    mySymbol: "key2",
    [mySymbol]: "key1",    // interview Q - symbol used in [] in object 
    age: "27",
    location: "indore",
    email: "indore@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//accessing the object and its values
console.log(jsUser.age)    // By this method we can access only without " " key's values

console.log(jsUser["full name"]); // By this method we can access any type of object's value
console.log(jsUser["email"]); // By this method we can access any type of object's value

//interview - access the symbol
console.log(jsUser["mySymbol"]);
console.log(typeof jsUser["mySymbol"]);   // typeof this is string, it is not refering to the symbol
console.log(jsUser[mySymbol]);
console.log(jsUser);   // typeof this is symbol, it is not refering to the symbol

//Changing the value of object variables nad freezing
jsUser.name = "jassi"
//Object.freeze(jsUser)   // freezing the object- no value overritten
jsUser.name = "manish"  // no overwritten
console.log(jsUser);

//------------- Adding function into object-----------
// function considered as variables

jsUser.greeting = function(){
    console.log("Hello JS user");
}

console.log(jsUser.greeting());