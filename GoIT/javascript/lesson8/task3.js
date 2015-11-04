/*Задание 3 (get/set свойства)
 У вас есть объект User, который хранит имя и фамилию в свойстве this.fullName
 Сделайте, чтобы были доступны свойства firstName и lastName,
 причём не только на чтение, но и на запись.
 Важно: в этой задаче fullName должно остаться свойством, а firstName/lastName
 — реализованы через get/set. Лишнее дублирование здесь ни к чему.
 */

function User (fullName){
    this.fullName = fullName;
    Object.defineProperty(this,'firstName', {
        get: function(){
            return this.fullName.split(' ')[0];
        },
        set: function(value){
            this.fullName = value + ' ' + this.lastName;
        }
    } );
    Object.defineProperty(this, 'lastName', {
        get: function(){
            return this.fullName.split(' ')[1];
        },
        set: function(value){
            this.fullName = this.firstName + ' ' + value;
        }
    });

}

var vasya = new User('Александр Пушкин');

console.log(vasya.firstName);
console.log(vasya.lastName);

vasya.lastName = 'Толстой';

console.log(vasya.fullName);