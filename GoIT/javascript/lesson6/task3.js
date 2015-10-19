/*
Задание 3 (Random sort)
Необходимо отсортировать массив в случайном порядке используя метод sort.
 */

function randomSort(a, b){
    return Math.random() - 0.5;
}

var arr = [1, 2, 3, 4, 5];

arr.sort(randomSort);

console.log( arr ); // элементы в случайном порядке, например [3,5,1,2,4]