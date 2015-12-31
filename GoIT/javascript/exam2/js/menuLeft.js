
var menuWrapper = document.querySelector('.menu_wrapper');
var toggleMenu = document.querySelector('.toggle_menu');
var home = menuWrapper.querySelector('.home');
//var colRight = document.querySelector('.col_right');

home.addEventListener('click', openOrCloseMenu);
toggleMenu.addEventListener('click', openOrCloseMenu);


function openOrCloseMenu(){
    menuWrapper.classList.toggle('open');
}


//var menu = document.querySelector('.menu');

//menuWrapper.addEventListener('click', openRightCol);
//menuWrapper.addEventListener('click', closeRightCol);
//
//function openRightCol(e){
//    e.preventDefault();
//    var target = e.target;
//
//    if((target.tagName != 'A') ){
//        return;
//    }
//    //var elem = document.getElementsByClassName('open_right_col');
//    //alert(elem.classList);
//    //alert(elem != target);
//    //if(elem || elem != target){
//    //    elem.classList.toggle('open_right_col');
//    //}
//    //colRight.style.display = 'block';
//    var attribute  = ('data-' + target.className);
//    var menuItems = document.querySelectorAll('.menu_item');
//    for(var i = 0; i < menuItems.length; i++){
//        if(menuItems[i].hasAttribute(attribute)){
//            menuItems[i].classList.toggle('open_right_col');
//
//        }
//    }
//}

//function closeRightCol(e){
//    var target = e.target;
//    //var openedElem = document.querySelector('.open_right_col');
//    if(target.tagName != 'A'){
//        return;
//    }
//    if(target.classList.contains('home')){
//        colRight.style.display = 'none';
//        //openedElem.classList.remove('open_right_col');
//    }
//}
