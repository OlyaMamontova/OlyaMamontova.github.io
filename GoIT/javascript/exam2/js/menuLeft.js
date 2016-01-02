
var menuWrapper = document.querySelector('.menu_wrapper');
var toggleMenu = document.querySelector('.toggle_menu');
var home = menuWrapper.querySelector('.home');
//var colRight = document.querySelector('.col_right');

home.addEventListener('click', openOrCloseMenu);
toggleMenu.addEventListener('click', openOrCloseMenu);


function openOrCloseMenu(){
    menuWrapper.classList.toggle('open');
}

