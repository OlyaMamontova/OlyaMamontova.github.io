/*Gradually Adding Parameters
 This kata is all about adding numbers.
 You will create a function named add. This function will return the sum of all
 the arguments. Sounds easy, doesn't it??
 Well here's the twist. The inputs will gradually increase with their index as
 parameter to the function.
 */

 console.log(add(3,4,5));  //returns ( 3 * 1 ) + ( 4 * 2 ) + ( 5 * 3 ) = 26

function add() {
    var result = 0;
    for(var i = 0; i < arguments.length; i++){
        result += arguments[i] * (i+1);
    }
    return result;
}
