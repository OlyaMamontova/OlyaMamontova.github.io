/*Задание 5

 Write a JavaScript function that accepts a string as a parameter and
 find the longest word within the string. Go to the editor

 Example string: Web Development Tutorial

 Expected Output: Development
 */

function getLongestWord(str){
    var arr = str.split(' ');
    var longestWord = arr[0];
    for(var i = 1; i<arr.length; i++){
        if(arr[i].length > longestWord.length){
            longestWord = arr[i];
        }
    }
    return longestWord;
}

console.log(getLongestWord("Web  Tutorial Development"));
