//Singleton : Whenever we create a object using constructor singleton is called
// Syntax: Object.create

//Singleton
//const tinderUser = new Object()

//Non Singleton
const tinderUser = {}

tinderUser.id = '123abc'
tinderUser.name = 'Arif'
tinderUser.isLoggedIb= false

console.log(tinderUser);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

//This will create object inside object like array.push
//const obj3 = {obj1,obj2}
const obj3 = Object.assign(obj1, obj2)

//---------De-structuring objects -------------
const course={
    coursename: "Js in hindi",
    price: "999",
    courseInstructor: "arif"
}

//This is what de-structuring refers to courseInstructor to instructor
const { courseInstructor:instructor}= course
console.log(instructor);
