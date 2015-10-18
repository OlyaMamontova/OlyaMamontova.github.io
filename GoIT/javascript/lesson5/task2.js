/*Задание 2 (Изменение численных свойств)
 Напишите функцию multiplyNumeric которая принимает на вход объект и
 возвращает объект в котором все числовые значения у свойств умножены на 2.
 */

var image = {
    width: 100,
    height: 400,
    title: null
};

function multiplyNumeric(obj){
    for(var i in obj){
        if(!isNaN(parseFloat(obj[i]) && isFinite(obj[i]))){
            obj[i] *= 2;
        }
    }
    return obj;
}

console.log(multiplyNumeric(image));