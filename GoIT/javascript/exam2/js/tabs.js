

//right column
$(document).ready(function () {

    var tabContainers = $('.menu_item'); // получаем массив контейнеров
    $('ul.menu a').click(function () {
        tabContainers.hide(); // прячем все табы
        tabContainers.filter(this.hash).show(); // показываем содержимое текущего
        return false;
    }).filter(':first').click();
});

//switch photo about me
$(document).ready(function(){
    var photos = $('.menu1_about_me_photo_wrap');
    photos.hide().filter(':first').show();
    $('.switch_photo').click(function(){
        photos.hide();
        photos.filter(this.hash).show();
        return false;
    });
});

//show enlarged images
$(document).ready(function(){
    var photos = $('.enlarged_img');
    $('.menu3_zoom').click(function(){
        photos.hide();
        $('.enlarged_images').show();
        photos.filter(this.hash).show();
        return false;
    });
});

//hide enlarged images
$(document).ready(function(){
    $('.close_button').click(function(){
        $('.enlarged_images').hide();
    });
});

