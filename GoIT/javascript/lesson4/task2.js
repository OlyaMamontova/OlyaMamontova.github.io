/*
 �������� ������� checkSpam ������� ��������� ������ �� ���������� ����:
 spam, sex.
 */
function checkSpam(str){
    str = str.toLowerCase();
    if((str.indexOf('spam')) >= 0 || (str.indexOf('sex') >= 0)){
        return true;
    }
    return false;
}
