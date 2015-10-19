/**
 * Created by Olya on 19.10.2015.
 */
'use strict';

function isValidWalk(walk) {
    var counterN = 0, counterS = 0, counterW = 0,counterE = 0;
    for(var i = 0; i < walk.length; i++){
        if(walk[i] == 'n') counterN++;
        if(walk[i] == 's') counterS++;
        if(walk[i] == 'w') counterW++;
        if(walk[i] == 'e') counterE++;
    }
    return walk.length == 10 && counterN == counterS && counterE == counterW;
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));