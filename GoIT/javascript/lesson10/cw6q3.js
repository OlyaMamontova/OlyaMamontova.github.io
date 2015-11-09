/*Multiples of 3 and 5
 If we list all the natural numbers below 10 that are multiples of 3 or 5,
 we get 3, 5, 6 and 9. The sum of these multiples is 23.
 Finish the solution so that it returns the sum of all the multiples of 3 or 5
 below the number passed in.
 */
function solution(number){
    var sum = 0;
    for(var i = 1; i < number; i++){
        if(i % 3 === 0 || i % 5 === 0){
            console.log(i);
            sum += i;
        }
    }
    return sum;
}

console.log(solution(10));
