/*
Make the sum() function return the sum of the values in the passed in array.
Your solution must use the reduce() function of the built-in javascript
Array object.
 */

function sum(array) {
    var result = array.reduce(function(sum, current){
        return sum + current;
    });
    return result;
}

var test1 = [1,2,3,4,5,6,7,8,9,10];
console.log(sum(test1));
