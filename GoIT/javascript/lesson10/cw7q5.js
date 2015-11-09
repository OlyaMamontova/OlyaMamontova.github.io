/*Find Duplicates
 Given an array, find the duplicates in that array, and return a new array of
 those duplicates.
 Note: numbers and their corresponding string representations should not be
 treated as duplicates (i.e., '1' !== 1).
 */
console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, '5']));

function duplicates(arr) {
    var newArr = [];
    for(var i = 0; i < arr.length-1; i++){
        for(var j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                if (newArr.indexOf(arr[i]) === -1) {
                    newArr.push(arr[i]);
                }
            }
        }
    }
    return newArr;
}
