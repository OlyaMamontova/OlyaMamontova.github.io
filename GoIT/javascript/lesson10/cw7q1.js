/*
Write a single function that can be invoked by either
 sum(2,3); //5
 //or
 sum(2)(3); //5
 */

console.log(sum(2,3)); //5
console.log(sum(2)(3)); //5

function sum (a,b){
    if(arguments[1]!= undefined){
        return a + b;
    } else {
        return function(b){
            return a + b;
        }
    }
}