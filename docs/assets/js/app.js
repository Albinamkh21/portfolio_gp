(function() {
  'use strict';

  setTimeout(function() {
    document.querySelector('.greating_picture').classList.add('m--show');
  }, 1000);
})();


$(document).ready(function() {

    if($('.preloader').length){
        preloader.init();
    }
    slider.init();
    if($('.fullscreen-menu').length){
        fullscreenMenu.init();
    }

});







/*slider*/
var slider = (function () {
    var counter = 0,
        duration = 300,
        inProcess = false;
    var moveSlide =  function (direction) {
        var upList = $('.slider__item', '.slider__btns__up'),
            upActiveItem = upList.filter('.active'),
            downList = $('.slider__item', '.slider__btns__down'),
            downActiveItem = downList.filter('.active'),
            displayList = $('.slider__item', '.slider__display'),
            displayActiveItem = displayList.filter('.active'),
            descList = $('.slider-description__item', '.slider-description__list'),
            descActiveItem = descList.filter('.active'),

            downBtnIndex = downActiveItem.index(),
            upBtnIndex =  upActiveItem.index(),
            displayIndex = displayActiveItem.index(),
            directionCounter = direction == 'down' ? -1 : +1;


        if(direction=='up') {
            displayIndex = displayIndex+1 >= displayList.length? 0: displayIndex+1;
            upBtnIndex = upBtnIndex+1 >= upList.length ? 0: upBtnIndex+1;
            downBtnIndex = downBtnIndex+1 >= downList.length ? 0 : downBtnIndex+1;
        } else {//down
            displayIndex = displayIndex==0? displayList.length-1: displayIndex-1;
            upBtnIndex = upBtnIndex == 0 ? downList.length-1 :upBtnIndex-1;
            downBtnIndex = downBtnIndex == 0? downList.length-1 : downBtnIndex-1;
        }
        var regItemForDisplay = displayList.eq(displayIndex);
        var regItemUp = upList.eq(upBtnIndex);
        var regItemDown = downList.eq(downBtnIndex);
        var regItemForDesc = descList.eq(displayIndex);


        //обновитть картнку в контролах
        var display = $('.slider__display-pic', '.slider'),
            nextDisplaySrc = $('img', regItemForDisplay).attr('src'),
            fadedOut = $.Deferred();
        display.fadeOut(function() {
            fadedOut.resolve();

        });
        fadedOut.done(function () {
            //preloader.show();

            display.attr('src', nextDisplaySrc).on('load', function(){
                //loaded.resolve();
                display.fadeIn(300);
            });

        });
        displayActiveItem.removeClass('active');
        regItemForDisplay.addClass('active');

        //Поменяем описание слайдера
        descActiveItem.removeClass('active');
        regItemForDesc.addClass('active');


        //обновитть картнку в кликнутом контроле
        upActiveItem.animate({
            'top':  '-100%'
        }, duration);

        regItemUp.animate({
            'top': 0
        }, duration, function () {
            upActiveItem.removeClass('active')
                .css('top', '100%');
            $(this).addClass('active');

            inProcess = false;
        });

        //обновитть картнку в пассивном контроле

        downActiveItem.animate({
            'top':  '100%'
        }, duration);

        regItemDown.animate({
            'top': 0
        }, duration, function () {
            downActiveItem.removeClass('active')
                .css('top', '-100%');
            $(this).addClass('active');

            inProcess = false;
        });




    }
    return {
        init: function () { //здесь на родителя нужно навесить
            $('#sliderUpArrow').on('click', function (e) {
                e.preventDefault();
                if (!inProcess) {
                    inProcess = true;
                    moveSlide('up');
                    counter++;
                }
            });
            $('#sliderDownArrow').on('click', function (e) {
                e.preventDefault();
                if (!inProcess) {
                    inProcess = true;

                    moveSlide('down');
                    counter--;
                }
            });
        }
    }
}());

/*slider finish*/

/*preloader*/
var preloader = (function () {

    var preloader = $('.preloader');
    var percentsTotal = 0;

    var init = function () {
        var myImages = imgPath.toArray();
         loadImages(myImages);

    }
    var imgPath = $('*').map(function(index, elem) {
        console.log(4);

        var background = $(elem).css('background-image'),
            img = $(elem).is('img'),
            path = '';
        if (background != 'none') {
            path = background.replace('url("', '').replace('")', '');
        }
        if (img) {
            path = $(elem).attr('src');
        }
        if (path) {
            return path;
        }

    });

    var setPercents = function (total, current) {

        var percents = Math.ceil(current/total*100);

        $('.preloader__percents').text(percents + '%');

        if (percents >=100) {
            setTimeout(function(){
                preloader.fadeOut()
            }, 500);
        }

    };

    var loadImages = function (images) {
        if (!images.length) {
            preloader.fadeOut();
        }

        images.forEach( function(img, index) {
            var fakeImage = $('<img>', {
                attr: {
                    src: img
                }

            });

            fakeImage.on('load error', function() {

                percentsTotal++;
                setPercents(images.length, percentsTotal);

            });

        });

    };

    return{

        init:init

    };

})();

/*preloader finish*/

/*hambueger menu*/


var fullscreenMenu = (function () {

    var menu = $('.fullscreen-menu');

    var init = function () {

        $('.hamburger-menu__link').on('click', _openMenu);
    };

    var _openMenu = function (e) {

        e.preventDefault ();

        if ($(this).hasClass('active')) {

            $(this).removeClass('active');
            $('body').css('position','static');
            menu.slideUp();

        } else {

            $(this).addClass('active');
            $('body').css('position','fixed');
            menu.slideDown();

        }

    };

    return{

        init:init

    };

})();

/*hambueger menu finished*/

// flipper
var flipper = (function () {

    var flipper =  document.getElementById('flipper');
    var authBtn =  document.getElementById('authBtn');

    document.addEventListener('click', function (e) {
        console.log(e.target.id);
        if(e.target.id=="authBtn"){
            e.preventDefault();
            flipper.classList.add('hover');

        }else {

            flipper.classList.remove('hover');

        }
    });


}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyZWF0aW5nX3BpY3R1cmUnKS5jbGFzc0xpc3QuYWRkKCdtLS1zaG93Jyk7XHJcbiAgfSwgMTAwMCk7XHJcbn0pKCk7XHJcblxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgaWYoJCgnLnByZWxvYWRlcicpLmxlbmd0aCl7XHJcbiAgICAgICAgcHJlbG9hZGVyLmluaXQoKTtcclxuICAgIH1cclxuICAgIHNsaWRlci5pbml0KCk7XHJcbiAgICBpZigkKCcuZnVsbHNjcmVlbi1tZW51JykubGVuZ3RoKXtcclxuICAgICAgICBmdWxsc2NyZWVuTWVudS5pbml0KCk7XHJcbiAgICB9XHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qc2xpZGVyKi9cclxudmFyIHNsaWRlciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgY291bnRlciA9IDAsXHJcbiAgICAgICAgZHVyYXRpb24gPSAzMDAsXHJcbiAgICAgICAgaW5Qcm9jZXNzID0gZmFsc2U7XHJcbiAgICB2YXIgbW92ZVNsaWRlID0gIGZ1bmN0aW9uIChkaXJlY3Rpb24pIHtcclxuICAgICAgICB2YXIgdXBMaXN0ID0gJCgnLnNsaWRlcl9faXRlbScsICcuc2xpZGVyX19idG5zX191cCcpLFxyXG4gICAgICAgICAgICB1cEFjdGl2ZUl0ZW0gPSB1cExpc3QuZmlsdGVyKCcuYWN0aXZlJyksXHJcbiAgICAgICAgICAgIGRvd25MaXN0ID0gJCgnLnNsaWRlcl9faXRlbScsICcuc2xpZGVyX19idG5zX19kb3duJyksXHJcbiAgICAgICAgICAgIGRvd25BY3RpdmVJdGVtID0gZG93bkxpc3QuZmlsdGVyKCcuYWN0aXZlJyksXHJcbiAgICAgICAgICAgIGRpc3BsYXlMaXN0ID0gJCgnLnNsaWRlcl9faXRlbScsICcuc2xpZGVyX19kaXNwbGF5JyksXHJcbiAgICAgICAgICAgIGRpc3BsYXlBY3RpdmVJdGVtID0gZGlzcGxheUxpc3QuZmlsdGVyKCcuYWN0aXZlJyksXHJcbiAgICAgICAgICAgIGRlc2NMaXN0ID0gJCgnLnNsaWRlci1kZXNjcmlwdGlvbl9faXRlbScsICcuc2xpZGVyLWRlc2NyaXB0aW9uX19saXN0JyksXHJcbiAgICAgICAgICAgIGRlc2NBY3RpdmVJdGVtID0gZGVzY0xpc3QuZmlsdGVyKCcuYWN0aXZlJyksXHJcblxyXG4gICAgICAgICAgICBkb3duQnRuSW5kZXggPSBkb3duQWN0aXZlSXRlbS5pbmRleCgpLFxyXG4gICAgICAgICAgICB1cEJ0bkluZGV4ID0gIHVwQWN0aXZlSXRlbS5pbmRleCgpLFxyXG4gICAgICAgICAgICBkaXNwbGF5SW5kZXggPSBkaXNwbGF5QWN0aXZlSXRlbS5pbmRleCgpLFxyXG4gICAgICAgICAgICBkaXJlY3Rpb25Db3VudGVyID0gZGlyZWN0aW9uID09ICdkb3duJyA/IC0xIDogKzE7XHJcblxyXG5cclxuICAgICAgICBpZihkaXJlY3Rpb249PSd1cCcpIHtcclxuICAgICAgICAgICAgZGlzcGxheUluZGV4ID0gZGlzcGxheUluZGV4KzEgPj0gZGlzcGxheUxpc3QubGVuZ3RoPyAwOiBkaXNwbGF5SW5kZXgrMTtcclxuICAgICAgICAgICAgdXBCdG5JbmRleCA9IHVwQnRuSW5kZXgrMSA+PSB1cExpc3QubGVuZ3RoID8gMDogdXBCdG5JbmRleCsxO1xyXG4gICAgICAgICAgICBkb3duQnRuSW5kZXggPSBkb3duQnRuSW5kZXgrMSA+PSBkb3duTGlzdC5sZW5ndGggPyAwIDogZG93bkJ0bkluZGV4KzE7XHJcbiAgICAgICAgfSBlbHNlIHsvL2Rvd25cclxuICAgICAgICAgICAgZGlzcGxheUluZGV4ID0gZGlzcGxheUluZGV4PT0wPyBkaXNwbGF5TGlzdC5sZW5ndGgtMTogZGlzcGxheUluZGV4LTE7XHJcbiAgICAgICAgICAgIHVwQnRuSW5kZXggPSB1cEJ0bkluZGV4ID09IDAgPyBkb3duTGlzdC5sZW5ndGgtMSA6dXBCdG5JbmRleC0xO1xyXG4gICAgICAgICAgICBkb3duQnRuSW5kZXggPSBkb3duQnRuSW5kZXggPT0gMD8gZG93bkxpc3QubGVuZ3RoLTEgOiBkb3duQnRuSW5kZXgtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJlZ0l0ZW1Gb3JEaXNwbGF5ID0gZGlzcGxheUxpc3QuZXEoZGlzcGxheUluZGV4KTtcclxuICAgICAgICB2YXIgcmVnSXRlbVVwID0gdXBMaXN0LmVxKHVwQnRuSW5kZXgpO1xyXG4gICAgICAgIHZhciByZWdJdGVtRG93biA9IGRvd25MaXN0LmVxKGRvd25CdG5JbmRleCk7XHJcbiAgICAgICAgdmFyIHJlZ0l0ZW1Gb3JEZXNjID0gZGVzY0xpc3QuZXEoZGlzcGxheUluZGV4KTtcclxuXHJcblxyXG4gICAgICAgIC8v0L7QsdC90L7QstC40YLRgtGMINC60LDRgNGC0L3QutGDINCyINC60L7QvdGC0YDQvtC70LDRhVxyXG4gICAgICAgIHZhciBkaXNwbGF5ID0gJCgnLnNsaWRlcl9fZGlzcGxheS1waWMnLCAnLnNsaWRlcicpLFxyXG4gICAgICAgICAgICBuZXh0RGlzcGxheVNyYyA9ICQoJ2ltZycsIHJlZ0l0ZW1Gb3JEaXNwbGF5KS5hdHRyKCdzcmMnKSxcclxuICAgICAgICAgICAgZmFkZWRPdXQgPSAkLkRlZmVycmVkKCk7XHJcbiAgICAgICAgZGlzcGxheS5mYWRlT3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBmYWRlZE91dC5yZXNvbHZlKCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGZhZGVkT3V0LmRvbmUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvL3ByZWxvYWRlci5zaG93KCk7XHJcblxyXG4gICAgICAgICAgICBkaXNwbGF5LmF0dHIoJ3NyYycsIG5leHREaXNwbGF5U3JjKS5vbignbG9hZCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAvL2xvYWRlZC5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5LmZhZGVJbigzMDApO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZGlzcGxheUFjdGl2ZUl0ZW0ucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIHJlZ0l0ZW1Gb3JEaXNwbGF5LmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgLy/Qn9C+0LzQtdC90Y/QtdC8INC+0L/QuNGB0LDQvdC40LUg0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAgIGRlc2NBY3RpdmVJdGVtLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICByZWdJdGVtRm9yRGVzYy5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblxyXG5cclxuICAgICAgICAvL9C+0LHQvdC+0LLQuNGC0YLRjCDQutCw0YDRgtC90LrRgyDQsiDQutC70LjQutC90YPRgtC+0Lwg0LrQvtC90YLRgNC+0LvQtVxyXG4gICAgICAgIHVwQWN0aXZlSXRlbS5hbmltYXRlKHtcclxuICAgICAgICAgICAgJ3RvcCc6ICAnLTEwMCUnXHJcbiAgICAgICAgfSwgZHVyYXRpb24pO1xyXG5cclxuICAgICAgICByZWdJdGVtVXAuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICd0b3AnOiAwXHJcbiAgICAgICAgfSwgZHVyYXRpb24sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdXBBY3RpdmVJdGVtLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgLmNzcygndG9wJywgJzEwMCUnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICBpblByb2Nlc3MgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy/QvtCx0L3QvtCy0LjRgtGC0Ywg0LrQsNGA0YLQvdC60YMg0LIg0L/QsNGB0YHQuNCy0L3QvtC8INC60L7QvdGC0YDQvtC70LVcclxuXHJcbiAgICAgICAgZG93bkFjdGl2ZUl0ZW0uYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICd0b3AnOiAgJzEwMCUnXHJcbiAgICAgICAgfSwgZHVyYXRpb24pO1xyXG5cclxuICAgICAgICByZWdJdGVtRG93bi5hbmltYXRlKHtcclxuICAgICAgICAgICAgJ3RvcCc6IDBcclxuICAgICAgICB9LCBkdXJhdGlvbiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBkb3duQWN0aXZlSXRlbS5yZW1vdmVDbGFzcygnYWN0aXZlJylcclxuICAgICAgICAgICAgICAgIC5jc3MoJ3RvcCcsICctMTAwJScpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgIGluUHJvY2VzcyA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkgeyAvL9C30LTQtdGB0Ywg0L3QsCDRgNC+0LTQuNGC0LXQu9GPINC90YPQttC90L4g0L3QsNCy0LXRgdC40YLRjFxyXG4gICAgICAgICAgICAkKCcjc2xpZGVyVXBBcnJvdycpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWluUHJvY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGluUHJvY2VzcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbW92ZVNsaWRlKCd1cCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICQoJyNzbGlkZXJEb3duQXJyb3cnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpblByb2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBpblByb2Nlc3MgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBtb3ZlU2xpZGUoJ2Rvd24nKTtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudGVyLS07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSgpKTtcclxuXHJcbi8qc2xpZGVyIGZpbmlzaCovXHJcblxyXG4vKnByZWxvYWRlciovXHJcbnZhciBwcmVsb2FkZXIgPSAoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciBwcmVsb2FkZXIgPSAkKCcucHJlbG9hZGVyJyk7XHJcbiAgICB2YXIgcGVyY2VudHNUb3RhbCA9IDA7XHJcblxyXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG15SW1hZ2VzID0gaW1nUGF0aC50b0FycmF5KCk7XHJcbiAgICAgICAgIGxvYWRJbWFnZXMobXlJbWFnZXMpO1xyXG5cclxuICAgIH1cclxuICAgIHZhciBpbWdQYXRoID0gJCgnKicpLm1hcChmdW5jdGlvbihpbmRleCwgZWxlbSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKDQpO1xyXG5cclxuICAgICAgICB2YXIgYmFja2dyb3VuZCA9ICQoZWxlbSkuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJyksXHJcbiAgICAgICAgICAgIGltZyA9ICQoZWxlbSkuaXMoJ2ltZycpLFxyXG4gICAgICAgICAgICBwYXRoID0gJyc7XHJcbiAgICAgICAgaWYgKGJhY2tncm91bmQgIT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgIHBhdGggPSBiYWNrZ3JvdW5kLnJlcGxhY2UoJ3VybChcIicsICcnKS5yZXBsYWNlKCdcIiknLCAnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpbWcpIHtcclxuICAgICAgICAgICAgcGF0aCA9ICQoZWxlbSkuYXR0cignc3JjJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwYXRoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXRoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgc2V0UGVyY2VudHMgPSBmdW5jdGlvbiAodG90YWwsIGN1cnJlbnQpIHtcclxuXHJcbiAgICAgICAgdmFyIHBlcmNlbnRzID0gTWF0aC5jZWlsKGN1cnJlbnQvdG90YWwqMTAwKTtcclxuXHJcbiAgICAgICAgJCgnLnByZWxvYWRlcl9fcGVyY2VudHMnKS50ZXh0KHBlcmNlbnRzICsgJyUnKTtcclxuXHJcbiAgICAgICAgaWYgKHBlcmNlbnRzID49MTAwKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHByZWxvYWRlci5mYWRlT3V0KClcclxuICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgbG9hZEltYWdlcyA9IGZ1bmN0aW9uIChpbWFnZXMpIHtcclxuICAgICAgICBpZiAoIWltYWdlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcHJlbG9hZGVyLmZhZGVPdXQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGltYWdlcy5mb3JFYWNoKCBmdW5jdGlvbihpbWcsIGluZGV4KSB7XHJcbiAgICAgICAgICAgIHZhciBmYWtlSW1hZ2UgPSAkKCc8aW1nPicsIHtcclxuICAgICAgICAgICAgICAgIGF0dHI6IHtcclxuICAgICAgICAgICAgICAgICAgICBzcmM6IGltZ1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBmYWtlSW1hZ2Uub24oJ2xvYWQgZXJyb3InLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBwZXJjZW50c1RvdGFsKys7XHJcbiAgICAgICAgICAgICAgICBzZXRQZXJjZW50cyhpbWFnZXMubGVuZ3RoLCBwZXJjZW50c1RvdGFsKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybntcclxuXHJcbiAgICAgICAgaW5pdDppbml0XHJcblxyXG4gICAgfTtcclxuXHJcbn0pKCk7XHJcblxyXG4vKnByZWxvYWRlciBmaW5pc2gqL1xyXG5cclxuLypoYW1idWVnZXIgbWVudSovXHJcblxyXG5cclxudmFyIGZ1bGxzY3JlZW5NZW51ID0gKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgbWVudSA9ICQoJy5mdWxsc2NyZWVuLW1lbnUnKTtcclxuXHJcbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgJCgnLmhhbWJ1cmdlci1tZW51X19saW5rJykub24oJ2NsaWNrJywgX29wZW5NZW51KTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIF9vcGVuTWVudSA9IGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQgKCk7XHJcblxyXG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG5cclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5jc3MoJ3Bvc2l0aW9uJywnc3RhdGljJyk7XHJcbiAgICAgICAgICAgIG1lbnUuc2xpZGVVcCgpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5jc3MoJ3Bvc2l0aW9uJywnZml4ZWQnKTtcclxuICAgICAgICAgICAgbWVudS5zbGlkZURvd24oKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJue1xyXG5cclxuICAgICAgICBpbml0OmluaXRcclxuXHJcbiAgICB9O1xyXG5cclxufSkoKTtcclxuXHJcbi8qaGFtYnVlZ2VyIG1lbnUgZmluaXNoZWQqL1xyXG5cclxuLy8gZmxpcHBlclxyXG52YXIgZmxpcHBlciA9IChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIGZsaXBwZXIgPSAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZsaXBwZXInKTtcclxuICAgIHZhciBhdXRoQnRuID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRoQnRuJyk7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmlkKTtcclxuICAgICAgICBpZihlLnRhcmdldC5pZD09XCJhdXRoQnRuXCIpe1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGZsaXBwZXIuY2xhc3NMaXN0LmFkZCgnaG92ZXInKTtcclxuXHJcbiAgICAgICAgfWVsc2Uge1xyXG5cclxuICAgICAgICAgICAgZmxpcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcblxyXG59KCkpO1xyXG4iXX0=
