// background
var total_pics_num = 4; // кількість зображень
var interval = 6000;    // затримка між зображеннями
var time_out = 0.5;     // затримка зміни зображень
var i = 0;
var timeout;
var opacity = 100;
function fade_to_next() {
    opacity--;
    var k = i + 1;
    var image_now = 'bg_' + i;
    if (i == total_pics_num) k = 1;
    var image_next = 'bg_' + k;
    document.getElementById(image_now).style.opacity = opacity/100;
    document.getElementById(image_now).style.filter = 'alpha(opacity='+ opacity +')';
    document.getElementById(image_next).style.opacity = (100-opacity)/100;
    document.getElementById(image_next).style.filter = 'alpha(opacity='+ (100-opacity) +')';
    timeout = setTimeout("fade_to_next()",time_out);
    if (opacity==1) {
        opacity = 100;
        clearTimeout(timeout);
    }
}
setTimeout (function go() {
    i++;
    if (i > total_pics_num) i=1;
    fade_to_next();
    setTimeout(go, interval);
}, interval);



//click on left menu
var menuWrapper = document.querySelector('.menu_wrapper');
var toggleMenu = document.querySelector('.toggle_menu');
var home = menuWrapper.querySelector('.home');

home.addEventListener('click', openOrCloseMenu);
toggleMenu.addEventListener('click', openOrCloseMenu);


function openOrCloseMenu(){
    menuWrapper.classList.toggle('open');
}


//show picture
var showingPicture;
document.onmouseover = function(e){
    var target = e.target;

    var picture = target.getAttribute('picture');
    if(!picture) return;

    var bigPicture = target.nextElementSibling;
    var coords = target.getBoundingClientRect();
    var left = coords.left - target.offsetWidth*2;
    if (left < 0) left = 0; // не вилазити за ліву межу вікна

    var top = coords.top - target.offsetHeight*2;
    if (top < 0) { // не вилазити за верхню межу вікна
        top = 0;
    }
    bigPicture.style.left = left + 'px';
    bigPicture.style.top = top + 'px';
    bigPicture.style.display = 'block';
    showingPicture = bigPicture;
};

document.onmouseout = function(e){
    if(showingPicture){
        showingPicture.style.display = 'none';
        showingPicture = null;
    }
};

