/*---------Objects - constructor and singleton--------*/

const userObject = new Object()  //object using Constructor

userObject.id = "123abc"
userObject.name = "saime"
userObject.isLoggedIn = false

console.log(userObject);

//---------object Nesting-----------------
otherUserObject = {                                         
    email: "new@javascript.com",
    fullname: {first: "kunal", last: "sahu"
    }
}

console.log(otherUserObject.fullname.first);  // accessing nested object

//----------object merging or combining-------------

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

//obj4 = {obj1, obj2}
//console.log(obj3);  // here same nested object like array had
//output=> { obj1: { '1': 'a', '2': 'b' }, obj2: { '2': 'd', '3': 'c' } }

//const Obj5 = Object.assign(obj1, obj2)  // target- obj1, source- obj2
//console.log(Obj5);
//console.log(obj1);  // here object 1 is changing output=> { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//const Obj6 = Object.assign(obj1, obj2, obj3) //target- obj1, sources - obj2, obj3
//console.log(Obj6); 
//console.log(obj1); //here also obj1 is changing { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const Obj7 = Object.assign({}, obj1, obj2, obj3) //target- {}, sources - obj1, obj2, obj3
console.log(Obj7);
console.log(obj1); //here obj1 is not changing b/c target object is different

//----------- combining of object through spread-----------
const obj8 = {...obj1, ...obj2, ...obj3}
console.log(obj8);
console.log(obj1);   // here obj1 is also not changing

//------------values from database---------------
// let suppose fetching the data in array object 

const users = [
    {
        id: 1,
        emailId: "user1@user.com"   
    },
    {
        id: 2,
        emailId: "user2@user.com"
    },
    {
        id: 3,
        emailId: "user3@user.com"
    }
]

//---accesing array object
users[1].emailId

console.log(userObject);
console.log(Object.keys(userObject));     // typeof this is array (we can access by loop) all the key
console.log(Object.values(userObject));   // typeof this is array (we can access by loop) all the values
console.log(Object.entries(userObject));  // seperate entries

//------finding property in object-----------

console.log(userObject.hasOwnProperty('isLoggedIn')); 



//---------------------------Destructuring--------------------------

const course = {
    coursename: "JavaScript",
    price: "999",
    courseMode: "Online"
}

// if we want to call many times course.courseMode- not a good prectice to write may time
console.log(course.courseMode) 

//so we destructure it so we can call mode inplace of course.courseMode
const {courseMode : mode} = course
console.log(mode);

//----------API and object-------------
// Earlier data and value in the xml format but now used the JSON
//JSON Format
/*
{
    "userID" : "kunal",
    "passwd" : "hgchasvs",
    "email" : "nvhjsbghfs"
}
*/

//---------fetch method to get the data from the URL and JSON--------
/* and convert into it object from array and other format
    API - randomuser.me (sample response API to analyse)
    jsonformattter.com - to beautify(format) or analyse the data
*/

