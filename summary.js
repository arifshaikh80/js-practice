// Datatypes are classified on basis of how it is stored in memory
//1. Primitive
//7 types. String, Number, Boolean, null, undefined, symbol, BigInt

//2. Non Primitive/Refrence
//3 types: Array,  Object, Function
//All non primitive are konown as function

//There are two types of memory in JS 
//1.Stack - Stores primitive
//2.Heap -  Stores Non Primitive

let myYoutubeName = "arif"; // Primitive type stored in the Stack.
let anotherName = myYoutubeName;   // A copy of the value is created in the Stack.
anotherName = "John";        // Changing the copy does not affect the original.

console.log(myYoutubeName); // Output: arif (Original value remains unchanged)
console.log(anotherName);   // Output: John (Only the copy value is changed)

let userOne = {         // The reference to this object is stored in the Stack.
    email: "user@google.com",
    upi: "user@ybl"
};                      // The actual object data is stored in the Heap.

let userTwo = userOne;  // userTwo references the same object in the Heap.

userTwo.email = "arif@google.com"; // Modifying userTwo also affects userOne.

console.log(userOne.email); // Output: arif@google.com
console.log(userTwo.email); // Output: arif@google.com