/*------------Arrays----------------
 array-copy operation create Shallow copies(create same reference point)
 array-copy opeartion does not create deep copies(not create same reference point)  )
 */

const myArr = [0, 1, 2, 3, 4, 5]
const superHeros = ["shaktiman", "juniorG", "hatim"]

console.log(myArr[2]);

const otherArray = new Array(2, 5, 8, 6)

//---------Array Method---------------

myArr.push(9);         //adding a element in array
myArr.push(6);
console.log(myArr);

myArr.pop();            // removing last inserted element
console.log(myArr);

//unshift - adding a element at 0th index and shifting the all the element. It is time consuming operation
myArr.unshift(6);       
console.log(myArr);

//shift - remove 0th index element and shift the all element
myArr.shift();
console.log(myArr);

console.log(myArr.includes(3));       //Is element included in the array return true/false
console.log(myArr.indexOf(3));       //index of a perticular element 

const arrayAfterJoin = myArr.join();  // converting array to string 
console.log(arrayAfterJoin); 
console.log(typeof myArr);            // output=> object
console.log(typeof arrayAfterJoin);   // output=> string

//-----------slice and splice--------------(Inertview)
/* slice- It dosed not include range, it include only before mentioned index and it does not change in original array
   splice- It includes range, it consider metioned index and it changed th original array

*/
console.log("Original Array ", myArr);              //output=> [ 0, 1, 2, 3, 4, 5, 9 ]
const myArrAfterSlice = myArr.slice(1, 3)
console.log("Sliced array", myArrAfterSlice);      //output=> [ 1, 2 ]
console.log("Original Array after slice", myArr);  //output=> Original Array after slice [ 0, 1, 2, 3, 4, 5, 9 ]

console.log("Original Array ", myArr);              //output=> [ 0, 1, 2, 3, 4, 5, 9 ]
const myArrAfterSplice = myArr.splice(1, 3)
console.log("Spliced array", myArrAfterSplice);      //output=> [ 1, 2, 3 ]
console.log("Original Array after splice", myArr);  // output=> Original Array after splice [ 0, 4, 5, 9 ]



