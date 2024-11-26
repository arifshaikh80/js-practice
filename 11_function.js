function addTwoNumber(number1, number2){
    console.log(number1 + number2);
}
//This function is executing and calling its value 
addTwoNumber(3,"4")
//console.log(addTwoNumber())
//This is just using the refrence not calling the function. It will not any take any input
addTwoNumber


//Shopping cart example

function calculatePrice(num1){
    return num1
}

console.log(calculatePrice(200, 400, 500));
//Without REST(...) operator the output will be single element 200

function calculatePrice(...num1){
    return num1
}

console.log(calculatePrice(200, 400, 500));
//With spread operator the output will be as array [200,400,500 ]

function calculatePrice(val1, val2 , ...num1){
    return num1
}

console.log(calculatePrice(200, 400, 500, 2000));
// Output will be [500,2000] as 200, 400 will stored in num1 and num2 

const user = {
    usernanme: "arif",
    age:"23"
}

function handleObject(anyObject){
    console.log(`Username is {anyObject.username} and age is {anyObject.age}`);
}

handleObject(user)
