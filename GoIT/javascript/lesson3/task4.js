/**
 * Created by Olya on 08.10.2015.
 */
/*
 ��������� 1� ������ ���, ����� ��� �������� �FizzBuzz� ��� ���� �����,
 ������� ������� � �� 3, � �� 5.
 */

for(var i = 1; i <= 100; i++){
    if(i%3 == 0 && i%5 == 0){
        console.log('FizzBuzz');
    }else{
        console.log(i);
    }
}