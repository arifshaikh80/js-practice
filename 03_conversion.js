// // This is example of sting to number conversion
// //let score = "33"

// //This is example to check while converting this it should be not a number as abc is included.
// let score = "33abc"

// console.log(typeof score)

// //console.log(typeof(score)) - By adding paranthesis writing as a string
// console.log(typeof(score))

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

//More exampele
//"33abc" => NaN
//true ==> 1, faslse = 0

//In Boolean
//1=> true 0=>false
// "" => false
// "arif" => true

// ************************ Operations *************

let value = 3
let negValue = -value
console.log(negValue);

let str1 = "hello"
let str2 = " arif"

let str3 = str1 + str2
console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log("1" + 2 +2);
// Output : 122

console.log(1+ 2 +"2");
//Output = 32

console.log((3 +4 ) * 5 % 3);

console.log(+true);
console.log(+"");

let gameCounter = 100
gameCounter++
console.log(gameCounter);


let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
//In Psotfix the value is appended to assigned varialble not the incremented like 1
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

