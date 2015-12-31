function Slider(selector) {

    var __self = this;

    //DOM nodes
    var sliderNode = document.querySelector(selector),
        sliderImagesNode = sliderNode.querySelector('.slider__images-wrap'),
        paginationNode = sliderNode.querySelector('.slider__pagination');

    var currentSlideIndex = 0,
        imagesCount = sliderImagesNode.children.length,
        slideSize = sliderImagesNode['offsetWidth'];

    this.nextSlide = function(){
        if(currentSlideIndex == imagesCount - 1){
            currentSlideIndex = 0;
            return;
        }
        currentSlideIndex++;
    };

    this.__createPaginationItems = function (){
        var fragment = document.createDocumentFragment();
        for(var i = 0; i < imagesCount; i++){
            var li = document.createElement('li');
            li.className = 'slider__pagination-item';

            var a = document.createElement('a');
            a.href = '#';
            a.setAttribute('data-slider__item', i + '');
            a.innerHTML = i + 1;

            li.appendChild(a);
            fragment.appendChild(li);
        }
        paginationNode.appendChild(fragment);

        li.children[currentSlideIndex].className = 'active';
    };

    this.__render = function(){
        var directionStyle = 'marginLeft';
        sliderImagesNode.style[directionStyle] = -(currentSlideIndex * slideSize) + 'px';

        paginationNode.querySelector('.active').classList.remove('active');
        paginationNode.children[currentSlideIndex].querySelector('a').classList.add('active');
    };

    sliderImagesNode.onclick = function(e){
        e.preventDefault();
        __self.nextSlide();
        __self.__render();

    };

    paginationNode.onclick = function(e) {
        e.preventDefault();

        var link = e.target;

        if(link.tagName !== 'A') {return;}

        currentSlideIndex = +link.dataset['slider__item'];

        __self.__render();

    };

    this.__init = function(){
        this.__render();
    };

    this.__createPaginationItems();
    this.__init();

}

new Slider('.slider');

var imagesBox = document.querySelector('.menu3_images_box');
var enlarged_images = document.querySelector('enlarged_images');
var enlargedImg = document.querySelector('.enlarged_img');
imagesBox.addEventListener('click', enlargeImg);

function enlargeImg(e){

    var target = e.target;

    if(target.tagName != 'A'){
        return;
    }

    enlargedImg.classList.add('open');
    enlarged_images.classList.add('open');

}
