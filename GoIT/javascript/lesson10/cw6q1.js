/*Complete Fibonacci Series
 The function 'fibonacci' should return an array of fibonacci numbers.
 The function takes a number as an argument to decide how many no. of elements
 to produce. If the argument is less than or equal to 0 then return empty array
 */

console.log(fibonacci(4)); // should return [0,1,1,2]
console.log(fibonacci(-1)); // should return []

function fibonacci(n) {
    var result = [];
    if(n > 0){
        for(var i = 0; i < n; i++){
            result.push(fib(i));
        }
    }
    return result;
}
function fib(n){
    return n <= 1 ? n : fib(n-1) + fib(n-2);
}