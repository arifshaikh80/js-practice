//Immediately Invoked Function Expressions(IIFE)
//Why we use IIFE?
//Ans:-Someimes there are pollution of global variable so to eliminate that we use IIFE
// IIFE syntax used to execute the function immediately
(function one(){
    //Named IIFE
    console.log(`DB Connected`);
})();

//IIFE function doesn't know where to end context so we have to add ";" to end the context just like LINE 7
((name)=>{
    //Unnamed IIFE
    console.log(`DB Connected Two ${name}`);
})('arif')