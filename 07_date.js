let myDate  = new Date()
console.log(myDate);
// Returns 2024-11-21T16:27:15.500Z

console.log(myDate.toString());
// Returns Thu Nov 21 2024 16:28:23 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString());
// Returns Thu Nov 21 2024

console.log(myDate.toISOString());
//Returns 2024-11-21T16:31:13.961Z

console.log(myDate.toJSON());
//Returns 2024-11-21T16:31:13.961Z

console.log(myDate.toLocaleString());
//Returns 11/21/2024, 4:31:13 PM

console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());


