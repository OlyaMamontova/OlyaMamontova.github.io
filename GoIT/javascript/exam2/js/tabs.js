function changeBg(){
    var body = document.getElementsByTagName('body')[0];
    var i = 1;

    setInterval(function go(){
        var classBg = body.className.split(' ');
        var currentClass = classBg[0].slice(0, -1) + i;
        if(i === 4) i = 0;
        body.classList.remove(classBg[0]);
        i++;
        body.classList.add(currentClass);
    },5000);

}

changeBg();

$(document).ready(function () {

    var tabContainers = $('.menu_item'); // получаем массив контейнеров
    $('ul.menu a').click(function () {
        tabContainers.hide(); // прячем все табы
        tabContainers.filter(this.hash).show(); // показываем содержимое текущего
        return false;
    }).filter(':first').click();
});


$(document).ready(function(){
    var photos = $('.enlarged_img');
    $('.menu3_zoom').click(function(){
        photos.hide();
        $('.enlarged_images').show();
        photos.filter(this.hash).show();
        return false;
    });
});

$(document).ready(function(){
    $('.close_button').click(function(){
        $('.enlarged_images').hide();
    });
});

$(document).ready(function(){
    var photos = $('.menu1_about_me_photo_wrap');
    photos.hide().filter(':first').show();
    $('.switch_photo').click(function(){
        photos.hide();
        photos.filter(this.hash).show();
        return false;
    });
});
