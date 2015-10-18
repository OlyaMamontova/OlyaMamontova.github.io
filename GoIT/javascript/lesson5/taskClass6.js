/**
 * Created by Olya on 17.10.2015.
 */

function filterRange(arr, a, b){
    var arrNew = [];
    for(var i = 0, j = 0; i < arr.length; i++){
        if((arr[i] >= a && arr[i] <= b) || (arr[i] <= a && arr[i] >= b)){
            arrNew[j] = arr[i];
            j++;
        }
    }
    return arrNew;
}
var arr1 = [5,7,4,8,3,0];
console.log(filterRange(arr1, 5, 3)) ;