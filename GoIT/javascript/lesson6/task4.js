/*
������� 4 (Object sort)
�������� ���, ������� ����������� ������ �������� people �� ���� age.
 �������� ������ ��� � ������� ����� ����������.
*/
var vasya = { name: '����', age: 23 };
var masha = { name: '����', age: 18 };
var vovochka = { name: '�������', age: 6 };

var people = [ vasya , masha , vovochka ];

people.sort(sortAge);

function sortAge(a, b){
    return a['age']- b['age'];
}

// ������ people: [vovochka, masha, vasya]
    console.log(people[0].age)