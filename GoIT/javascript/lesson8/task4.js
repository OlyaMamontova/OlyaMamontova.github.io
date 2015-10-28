/*
Задание 4 (Object counter)
 Добавить в конструктор Article:
 Подсчёт общего количества созданных объектов.
 Запоминание даты последнего созданного объекта.
 Используйте для этого статические свойства.
 Пусть вызов Article.showStats() выводит то и другое.
 */

function Article() {
    this.created = new Date();
    Article.count++;
    Article.date = this.created;

}
Article.count = 0;
Article.showStats = function(){
    console.log('Всього: ' + this.count + ', Остання: ' + this.date);
}

new Article();
new Article();

Article.showStats(); // Всего: 2, Последняя: (дата)

new Article();

Article.showStats(); // Всего: 3, Последняя: (дата)
