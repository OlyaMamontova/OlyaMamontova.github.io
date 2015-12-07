// 1.Все элементы label внутри таблицы. Должно быть 3 элемента.
document.getElementById('age-table').getElementsByTagName('label');

// 2.Первую ячейку таблицы (со словом "Возраст").
document.querySelector('#age-table td');

// 3.Вторую форму в документе.
document.getElementById('age-table').getElementsByTagName('form')[1];

// 4.Форму с именем search, без использования её позиции в документе.
document.querySelector('form[name="search"]');

// 5.Элемент input в форме с именем search. Если их несколько, то нужен первый.
document.querySelector('form[name="search"] input');

// 6.Элемент с именем info[0], без точного знания его позиции в документе.
document.getElementsByName('info[0]')[0];

// 7.Элемент с именем info[0], внутри формы с именем search-person.
document.querySelector('form[name="search-person"] [name="info[0]"]');

