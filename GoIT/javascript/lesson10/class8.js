/*Задание 8 (Уникальные css классы)
 Имеется массив css классов со старницы.
 var arr = ['link', 'menu', 'menu__item', 'menu__item', 'header', 'link', 'footer', 'sidebar', 'link' ... ];
 Необходимо из этого массива получить массив с уникальными именами классов
 (без повторений) отсортированный по частоте использования (наиболее часто
 используемые - впереди).
 Если классы используются одинаковое количество раз - между ними не важно
 какой будет первее.
 */

var arr = ['link', 'menu', 'menu__item', 'menu__item', 'header', 'link', 'footer', 'sidebar', 'link'];

function getUniqueClasses(arr){
    var obj = {};
    for(var i = 0; i < arr.length; i++){
        if(!obj[arr[i]]){
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]] += 1;
        }
    }
    var result = [];
    for(var className in obj){
        result.push(className);
    }

    return result.sort(function(a, b){
        return obj[b] - obj[a];
    });
}

console.log(getUniqueClasses(arr));