/**
 * Created by Olya on 08.10.2015.
 */
/*
 �������� ������� pow(x,n), ������� ���������� x � ������� n. ����� ������,
 �������� x �� ���� n ��� � ���������� ���������.
 */

function pow(x, n){
    var result = x;
    for(var i = 1; i < n; i++){
        result *= x;
    }
    return result;
}
console.log(pow(3, 3));