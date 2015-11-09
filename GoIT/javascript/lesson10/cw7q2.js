/*
Case swapping
 Given a string, swap the case for each of the letters.
 e.g. CodEwArs --> cODeWaRS
 */
function swap(str){
    var arr = str.split('');
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === arr[i].toLowerCase()){
            newArr[i] = arr[i].toUpperCase();
        } else {
            newArr[i] = arr[i].toLowerCase();
        }
    }
    return newArr.join('');
}
swap('HelloWorld');

console.log(swap('HelloWorld'));