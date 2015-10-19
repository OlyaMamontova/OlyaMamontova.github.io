/*
Задание 5 (Проверка на палиндром)
 Палиндром - это строка которая читается с обоих сторон одинаково.
 Например: Анна, оно, А роза упала на лапу Азора.
Необходимо написать функцию isPal(string) которая возвращает true или
false в зависимости от того является ли строка палиндромом или нет.
 */

function isPal(string){
    string = string.toLowerCase();
    var arr = string.split(' ').join('').split('');
    var arrReverse = arr.slice().reverse();
    for(var i = 0; i < arr.length; i++){
      if(arr[i] == arrReverse[i]){
        return true;
      } else {
        return false;
      }
    }
}

console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false
