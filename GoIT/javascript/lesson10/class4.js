/*Задание 4

 Write a JavaScript function that accepts a string as a parameter and
 converts the first letter of each word of the string in upper case.
 Go to the editor

 Example string: the quick brown fox

 Expected Output: The Quick Brown Fox
 */

function firstLetToUpper(str) {
    var words = str.split(' ');

    return words.map(function(word) {
        return word[0].toUpperCase() + word.slice(1);
    }).join(' ');
}

console.log(firstLetToUpper('the quick brown fox'));

function giveUpperCase(str) {
    var words = str.split(' ');
    var newArr = [];

    for (var i = 0; i < words.length; i++) {
        newArr.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
    }

    return newArr.join(' ');
}

console.log(giveUpperCase('the quick brown fox'));