const myArr = [1,2,3,4,5]
const myHeroes = ["batman", "ironman"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);

//Add 6 at the end of array
myArr.push(6)
console.log(myArr);

//Remov
myArr.pop()
console.log(myArr);

console.log("A ", myArr);


// Slice:- This method includes only 1,2 not 3 
const myn1 = myArr.slice(1,3)

console.log(myn1)
console.log("B ", myArr);

//Splice:- This method incluedes 1,2,3 and it manipulates the original array i.e will trim upto 3 
const myn2 = myArr.splice(1,3)
console.log(myn2)

let marvel_heroes = ["Thor", "Ironman", "Hulk"]
let dc_heroes = ["Batman","Aquaman","Superman"]

//This is wrong as it wil create array inside the array.
//And trat dc_heroes as a single element
marvel_heroes.push(dc_heroes)

//Concat will not not add the array the existing value
// To see the concated array the array should be stored in new variable.
marvel_heroes.concat(dc_heroes)


//The best way to concat array is using spread operator.


