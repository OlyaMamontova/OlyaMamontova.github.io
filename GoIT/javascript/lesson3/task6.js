/**
 * Created by Olya on 08.10.2015.
 */
/*
 Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря,
 умножает x на себя n раз и возвращает результат.
 */

function pow(x, n){
    var result = x;
    for(var i = 1; i < n; i++){
        result *= x;
    }
    return result;
}
console.log(pow(3, 3));