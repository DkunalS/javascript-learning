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

const Obj5 = Object.assign(obj1, obj2)  // tsrget- obj1, source- obj2
console.log(Obj5);

const Obj6 = Object.assign(obj1, obj2, obj3) //target- obj1, sources - obj2, obj3
console.log(Obj6);

const Obj7 = Object.assign({}, obj1, obj2, obj3) //target- {}, sources - obj1, obj2, obj3
console.log(Obj7);