//falsy values
//false, 0, -0 , BigINt 0n, "",null, undefined, NaN

//truthy values
//"0", 'false', " ", [], function(){}

//Nullish Coaleshing Operator

//It is made for null and definded values
//It check if some value is null so instead of null what should be assigned
let val1; 
val1= 5??10
val1 = null??10
val1 = null ?? 10 ??20

