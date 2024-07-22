// {} - It is scope when we use with the loos, if/else, and scope
// and when it is use with the object it is called declaration

// let manish = 25;
// const jassi = 30;
// var kunal = 65;

// here is same output are defined the values
// console.log(manish);
// console.log(jassi);
// console.log(kunal);

// but here it is creating the problem

var kunal = 50

if(true){
    let manish = 25;
    const jassi = 30;
    var kunal = 65;
//    kunal = 62
}

// let see the outout 
//console.log(manish);  // with this throughing error - manish is not defined
//console.log(jassi);   // same error  - jassi is not defined
console.log(kunal);     // but with this s output=> 65
// var and without var creates the scope problem it is accessable from outside of the scope even seperate varible is defined.
// Issue occurs when many programmer working on the same file and varible declred with the same name


console.log("----- Checking local and global scoping with the let and var---");

var dj = 50
let nagu= 89

if(true){
    let nagu = 65;
    var dj = 20;
    console.log("---within {} local scope--");
    console.log(nagu);   //output=> 65   block scope
    console.log(dj);     //output=> 20
}

console.log("-----outside of the {}");
console.log(nagu);  //ouput=> 89
console.log(dj);    //output=> 20 (here accessing global scope)

//----Nested scope and clousre----Interview topic---
// function 
function one(){
    const userName = "kunal"

    // child function can access the parent varible
    function two(){
        const website = "youtube"
        console.log(userName)
    }
    // console.log(website)  //throwhing error- website is not defined
    two()  // if we comment this function it will not print the variable userName
}

// one()

//if/else

if (true){
    const userName = "kunal"
    if (userName === "kunal"){
        const newWebsite = " youtube"
        console.log(userName + newWebsite);
    }
    // console.log(website);   // throwing the error- website is not defined (out if the scope)
}

// console.log(userName);   // throwing the error- userName is not defined (out if the scope)


//----------------- techniques of the functions---------------

// normal function- here we can call the function before initialization
function addOne(num){
    return num + 1;
}
console.log(addOne(6))

// storing the function in variable- Hoistimg

// console.log(addTwo(5))         // throwing error- Cannot access 'addTwo' before initialization
const addTwo = function(num){  // because storing the function in variable
    return num + 2;  
}
console.log(addTwo(10))     //here output will be showed
