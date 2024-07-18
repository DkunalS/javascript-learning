

const marvel_heros = ["ironman", "spidorman", "blackpanther"]
const dc_heros = ["batman", "acqaman", "superman"]

//----push perform operation on existing array
marvel_heros.push(dc_heros);
console.log(marvel_heros);       // output=> inner array
console.log(marvel_heros[3])     // outout=> print inner array
console.log(marvel_heros[3][1])  // output=> print element of inner array

// -----------concat------
//it return new array w/o modifiying existing arrays and doesn't create inner array

const marvel_heros1 = ["ironman", "spidorman", "blackpanther"]
const dc_heros1 = ["batman", "acqaman", "superman"]
const mergedArray = marvel_heros1.concat(dc_heros1);
console.log(mergedArray);

//------Spread - to spread the elements of many array into one array
// it is prefered inplace of concat

const spreadMergedArray = [...marvel_heros1, ...dc_heros1]
console.log(spreadMergedArray);
 
//-------flat method - Many inner array into one array----------

const manyInnerArray = [1, 2, 3, 4, [6, 5, 7], 9, [8, 9, [8, 5]]]
console.log(manyInnerArray.flat(1));  // output=> flat array to 1 inner array
console.log(manyInnerArray.flat(2));  // output=> flat array to 2 inner array

//-----when data come from other source like web pages so we have to check dat is in array format 

console.log(Array.isArray("kunal"));    // checking is it array or not
console.log(Array.from("kunal"));       // convert String data into array

//it will not covert into array -here we have to specifywhat we have to convert into array
console.log(Array.from({name: "hitesh"})); // passing the object- have to specify that convert key/pair to array 

//if we have multiple variable and arrays 
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // it will return new array by combining many variables