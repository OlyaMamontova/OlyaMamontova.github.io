
//right column
$(document).ready(function () {

    var tabContainers = $('.menu_item'); // �������� ������ �����������
    $('ul.menu a').click(function (e) {
        e.preventDefault();
        tabContainers.hide(); // ������ ��� ����
        tabContainers.filter(this.hash).show(); // ���������� ���������� ��������
        return false;
    }).filter(':first').click();
});

//switch photo about me
$(document).ready(function(){
    var photos = $('.menu1_about_me_photo_wrap');
    photos.hide().filter(':first').show();
    $('.switch_photo').click(function(e){
        e.preventDefault();
        photos.hide();
        photos.filter(this.hash).show();
        return false;
    });
});

//show enlarged images
$(document).ready(function(){
    var photos = $('.enlarged_img');
    $('.menu3_zoom').click(function(e){
        e.preventDefault();
        photos.hide();
        $('.enlarged_images').show();
        photos.filter(this.hash).show();
        return false;
    });
});

//hide enlarged images
$(document).ready(function(){
    $('.close_button').click(function(e){
        e.preventDefault();
        $('.enlarged_images').hide();
    });
});

