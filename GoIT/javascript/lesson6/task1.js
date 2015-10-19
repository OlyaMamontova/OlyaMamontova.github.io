/*
 Задание 1 (Удаление css клссов)
 У объекта есть свойство className, которое хранит список
 css класов – слов, разделенных пробелами
Напишите функцию removeClass(obj, cls), которая удаляет класс cls,
если он есть
 */

function removeClass(obj, cls){
    var classes = obj.className.split(' ');
    if(classes.indexOf(cls) == -1){
        obj.className = classes.join(' ');
    }
    else {
        classes.splice(classes.indexOf(cls), 1);
        obj.className = classes.join(' ');
        removeClass(obj, cls);
    }
}

var obj = {
    className: 'open menu menu my'
};v
removeClass(obj, 'menu');

console.log( "'" + obj.className + "'" );