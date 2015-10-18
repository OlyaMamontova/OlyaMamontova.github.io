/**
 * Created by Olya on 17.10.2015.
 */

function find(arr, value){
    for(var i = 0; i < arr.length; i++){
        if (arr[i] === value){
            return i;
        }
    }
    return -1;
}

var array = [1,2,3,4];
console.log(find(array, 3));
