//this keyword refers to the current context
const user={
    username: "arif",
    price:99,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`)
        //Calling this year will stuck in a loop.
        //user.welcomeMessage()

    }
}

user.welcomeMessage()
user.username = "sam"
// The current contextt will be change as in the node environment username is declared as sam .
user.welcomeMessage()
//sam, welcome to website

//console.log(this)
//It will print {} as there is  no context present in node and above context was closed with {}


function one() {
    //console.log(this);
    // This will present the details as this keywords work in object
}

one()

const hello = () =>{
    let username ="arif"
    console.log(this.username);
}

hello()
//Implicitly return
const addTwo =(num1,num2)=> num1 + num2