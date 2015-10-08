/**
 * Created by Olya on 08.10.2015.
 */
    /*
     # # # #
      # # # #
     # # # #
      # # # #
     # # # #
      # # # #
     # # # #
      # # # #
     */

var width = 8, height = 8;
var str = "";

for(var i = 0; i < height; i++){
    for(var j = 0; j < width; j++){
        if(((j%2 == 0) && (i%2 == 0)) || ((j%2 != 0) && (i%2 != 0))){
            str = str + '#';
        }
        if(((j%2 != 0) && (i%2 ==0)) || ((j%2 == 0) && (i%2 != 0))){
            str = str + ' ';
        }
        if(j == width-1){
            console.log(str);
            str = "";
        }
    }
}