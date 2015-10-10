/**
 * Created by Olya on 08.10.2015.
 */
function makeNegative(num) {
    if(num>0){
        return -num;
    }else if(num<0){
        return num;
    }
    else return 0;
//    return num < 0 ? num : -num;
}