
//Object literals

const mySym = Symbol("key1")

const JsUSer = {
    name:"Arif",
    age: 23,
    //To use symbol key should always defined in  [] else the dataype will be object
    [mySym]:"mykey1",
    location: "Mumbai",
    isLoggedIn: false,
    lastLoginDays:["Mon","Tue"]
}

//Always use [] to print mySym
console.log(JsUSer[mySym])

console.log(JsUSer.name);

//If you want object values should not change then use 
//Object.freeze(JsUSer)

JsUSer.greets = function(){
    console.log("Hello JS user");
}

console.log(JsUSer.greeting())



