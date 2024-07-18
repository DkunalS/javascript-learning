

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

//----- 


