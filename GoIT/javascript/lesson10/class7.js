/*
Write a function suffle(arr) to shuffle an array.
 */
function shuffle(arr){
    arr.sort(function(a, b){
        return Math.random()-0.5;
    });

    return arr;
}
arr = [1,2,3,4,5,6,7,8,9,0];
console.log(shuffle(arr));