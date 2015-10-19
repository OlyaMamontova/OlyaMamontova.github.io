/*
Задание 6 (Уникальные элементы массива)
Напишите функцию unique(arr), которая возвращает массив,
содержащий только уникальные элементы arr (arr — массив строк).
 */

var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()' ];

console.log( unique(strings) ); // кришна, харе, 8-()

function unique(arr){
    var arrUnique = [];
    for(var i = 0; i < arr.length; i++){
        if(arrUnique.indexOf(arr[i]) == -1){
            arrUnique.push(arr[i]);
        }
    }
    return arrUnique;
}