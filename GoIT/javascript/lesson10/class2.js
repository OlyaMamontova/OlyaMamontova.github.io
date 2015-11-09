/*Задание 2 (Максимальное число в массиве)
 Необходимо написать функцию, которая будет принимать на вход массив
 чисел и возвращать самое большое.
 */

function getMaxNumber(arr){
    var max = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

//function getMaxNumber(array) {
//    return Math.max.apply(this, array);
//}


console.log(getMaxNumber([1,30,40,2,7])); // 40
console.log(getMaxNumber([1,15,-20,2,-7])); // 15