$(document).ready(function () {
    var tabContainers = $('.menu_item'); // получаем массив контейнеров
    //tabContainers.hide().filter(':first').show(); // прячем все, кроме первого
    // далее обрабатывается клик по вкладке
    $('ul.menu a').click(function () {
        tabContainers.hide(); // прячем все табы
        tabContainers.filter(this.hash).show(); // показываем содержимое текущего
        $('ul.menu a').removeClass('selected'); // у всех убираем класс 'selected'
        $(this).addClass('selected'); // текушей вкладке добавляем класс 'selected'
        return false;
    }).filter(':first').click();
});


    $(document).ready(function(){
        var photos = $('.enlarged_img');
        //photos.hide().filter(':first').show();
        $('.enlarged_images').hide();
        $('.menu3_zoom').click(function(){
            photos.hide();
            $('.enlarged_images').show();
            photos.filter(this.hash).show();
            $('.menu3_zoom').removeClass('selected'); // у всех убираем класс 'selected'
            $(this).addClass('selected'); // текушей вкладке добавляем класс 'selected'
            return false;
        });
    });

    $(document).ready(function(){
        $('.close_button').click(function(){
            $('.enlarged_images').hide();
        });
    });

