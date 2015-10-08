/**
 * Created by Olya on 08.10.2015.
 */
/*
 Исправьте 1ю задачу так, чтобы она выводила «FizzBuzz» для всех чисел,
 которые делятся и на 3, и на 5.
 */

for(var i = 1; i <= 100; i++){
    if(i%3 == 0 && i%5 == 0){
        console.log('FizzBuzz');
    }else{
        console.log(i);
    }
}