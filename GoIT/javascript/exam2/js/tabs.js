$(document).ready(function () {
    var tabContainers = $('.menu_item'); // �������� ������ �����������
    //tabContainers.hide().filter(':first').show(); // ������ ���, ����� �������
    // ����� �������������� ���� �� �������
    $('ul.menu a').click(function () {
        tabContainers.hide(); // ������ ��� ����
        tabContainers.filter(this.hash).show(); // ���������� ���������� ��������
        $('ul.menu a').removeClass('selected'); // � ���� ������� ����� 'selected'
        $(this).addClass('selected'); // ������� ������� ��������� ����� 'selected'
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
            $('.menu3_zoom').removeClass('selected'); // � ���� ������� ����� 'selected'
            $(this).addClass('selected'); // ������� ������� ��������� ����� 'selected'
            return false;
        });
    });

    $(document).ready(function(){
        $('.close_button').click(function(){
            $('.enlarged_images').hide();
        });
    });

