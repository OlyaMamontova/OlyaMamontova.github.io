/*Задание 1 (Кто первым решил больше всех задач)
 Напиште код который выведет сотрудника который выполнил больше всех задач.
 */

'use strict';

var tasksCompleted = {
    'Anna': 29,
    'Serg': 100,
    'Elena': 1,
    'Anton': 99
};

function getBestEmployee(obj){
    var max = 0;
    var bestEmployee = '';
    for(var name in obj){
        if(max < obj[name]){
            max = obj[name];
            bestEmployee = name;
        }
    }
    console.log(bestEmployee);
}

getBestEmployee(tasksCompleted);
