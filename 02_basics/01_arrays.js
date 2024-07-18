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