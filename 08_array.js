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







