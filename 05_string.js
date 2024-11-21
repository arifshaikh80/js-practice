const name  = 'arif'
const age = 23

//String Interpolation method i.e using `` and $
console.log(`Hello my name is ${name} and age is ${age}`)

const surname = new String('Shaikh')

// All strings character are stored as key value pair with key as the position and value as character
console.log(surname[1]);

//String contains method/function like length, toUpperCase, toLowerCase, substring etc

console.log(surname.charAt(2));
console.log(surname.indexOf('k'));

const newSurname = surname.substring(0,4)
console.log(newSurname);

//slice(-2) extracts the last two elements of the array.
//When using a negative index with the slice method, negative indices are counted from the end of the array, starting at -1 for the last element, -2 for the second-to-last element, and so on. The negative index -2 itself is included because it is the starting point of the extraction.
const anotherString = surname.slice(-6, 1)
console.log(anotherString);

const StringOne = "  arif  " 
console.log(StringOne);
//Trim removes the starting and ending spaces
console.log(StringOne.trim());





