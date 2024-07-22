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
//console.log(kunal1);
// var and without var creates the scope problem it is accessable from outside of the scope even seperate varible is defined.
// Issue occurs when many programmer working on the same file and varible declred with the same name