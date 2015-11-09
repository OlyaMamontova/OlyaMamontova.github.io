/*Count characters in your string
 The main idea is to count all the occuring characters(UTF-8) in string.
 If you have string like this aba then the result should be { 'a': 2, 'b': 1 }
 What if the string is empty ? Then the result should be empty object literal { }
 */

function count (string) {
    var output = {};
    var letters = string.split('');

    for(var i = 0; i < letters.length; i++){
        if(!output[letters[i]]){
            output[letters[i]] = 1;
        } else {
            output[letters[i]] += 1;
        }
    }
    return output;
}
console.log(count('aba'));
