(function() {
  'use strict';

  setTimeout(function() {
    document.querySelector('.greating_picture').classList.add('m--show');
  }, 1000);
})();




$(function () {
    slider.init();
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



// flipper
var flipper = (function () {

    var flipper =  document.getElementById('flipper');
    var authBtn =  document.getElementById('authBtn');

    document.addEventListener('click', function (e) {
        console.log(e.target.id);
        console.log(e.target);
        if(e.target.id=="authBtn"){
            e.preventDefault();
            flipper.classList.add('hover');

        }else {

            if(e.target.id=="welcomeHeroImg") {
                flipper.classList.remove('hover');
            }


        }
    });


}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyZWF0aW5nX3BpY3R1cmUnKS5jbGFzc0xpc3QuYWRkKCdtLS1zaG93Jyk7XHJcbiAgfSwgMTAwMCk7XHJcbn0pKCk7XHJcblxyXG5cclxuXHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAgIHNsaWRlci5pbml0KCk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLypzbGlkZXIqL1xyXG52YXIgc2xpZGVyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBjb3VudGVyID0gMCxcclxuICAgICAgICBkdXJhdGlvbiA9IDMwMCxcclxuICAgICAgICBpblByb2Nlc3MgPSBmYWxzZTtcclxuICAgIHZhciBtb3ZlU2xpZGUgPSAgZnVuY3Rpb24gKGRpcmVjdGlvbikge1xyXG4gICAgICAgIHZhciB1cExpc3QgPSAkKCcuc2xpZGVyX19pdGVtJywgJy5zbGlkZXJfX2J0bnNfX3VwJyksXHJcbiAgICAgICAgICAgIHVwQWN0aXZlSXRlbSA9IHVwTGlzdC5maWx0ZXIoJy5hY3RpdmUnKSxcclxuICAgICAgICAgICAgZG93bkxpc3QgPSAkKCcuc2xpZGVyX19pdGVtJywgJy5zbGlkZXJfX2J0bnNfX2Rvd24nKSxcclxuICAgICAgICAgICAgZG93bkFjdGl2ZUl0ZW0gPSBkb3duTGlzdC5maWx0ZXIoJy5hY3RpdmUnKSxcclxuICAgICAgICAgICAgZGlzcGxheUxpc3QgPSAkKCcuc2xpZGVyX19pdGVtJywgJy5zbGlkZXJfX2Rpc3BsYXknKSxcclxuICAgICAgICAgICAgZGlzcGxheUFjdGl2ZUl0ZW0gPSBkaXNwbGF5TGlzdC5maWx0ZXIoJy5hY3RpdmUnKSxcclxuICAgICAgICAgICAgZGVzY0xpc3QgPSAkKCcuc2xpZGVyLWRlc2NyaXB0aW9uX19pdGVtJywgJy5zbGlkZXItZGVzY3JpcHRpb25fX2xpc3QnKSxcclxuICAgICAgICAgICAgZGVzY0FjdGl2ZUl0ZW0gPSBkZXNjTGlzdC5maWx0ZXIoJy5hY3RpdmUnKSxcclxuXHJcbiAgICAgICAgICAgIGRvd25CdG5JbmRleCA9IGRvd25BY3RpdmVJdGVtLmluZGV4KCksXHJcbiAgICAgICAgICAgIHVwQnRuSW5kZXggPSAgdXBBY3RpdmVJdGVtLmluZGV4KCksXHJcbiAgICAgICAgICAgIGRpc3BsYXlJbmRleCA9IGRpc3BsYXlBY3RpdmVJdGVtLmluZGV4KCksXHJcbiAgICAgICAgICAgIGRpcmVjdGlvbkNvdW50ZXIgPSBkaXJlY3Rpb24gPT0gJ2Rvd24nID8gLTEgOiArMTtcclxuXHJcblxyXG4gICAgICAgIGlmKGRpcmVjdGlvbj09J3VwJykge1xyXG4gICAgICAgICAgICBkaXNwbGF5SW5kZXggPSBkaXNwbGF5SW5kZXgrMSA+PSBkaXNwbGF5TGlzdC5sZW5ndGg/IDA6IGRpc3BsYXlJbmRleCsxO1xyXG4gICAgICAgICAgICB1cEJ0bkluZGV4ID0gdXBCdG5JbmRleCsxID49IHVwTGlzdC5sZW5ndGggPyAwOiB1cEJ0bkluZGV4KzE7XHJcbiAgICAgICAgICAgIGRvd25CdG5JbmRleCA9IGRvd25CdG5JbmRleCsxID49IGRvd25MaXN0Lmxlbmd0aCA/IDAgOiBkb3duQnRuSW5kZXgrMTtcclxuICAgICAgICB9IGVsc2Ugey8vZG93blxyXG4gICAgICAgICAgICBkaXNwbGF5SW5kZXggPSBkaXNwbGF5SW5kZXg9PTA/IGRpc3BsYXlMaXN0Lmxlbmd0aC0xOiBkaXNwbGF5SW5kZXgtMTtcclxuICAgICAgICAgICAgdXBCdG5JbmRleCA9IHVwQnRuSW5kZXggPT0gMCA/IGRvd25MaXN0Lmxlbmd0aC0xIDp1cEJ0bkluZGV4LTE7XHJcbiAgICAgICAgICAgIGRvd25CdG5JbmRleCA9IGRvd25CdG5JbmRleCA9PSAwPyBkb3duTGlzdC5sZW5ndGgtMSA6IGRvd25CdG5JbmRleC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcmVnSXRlbUZvckRpc3BsYXkgPSBkaXNwbGF5TGlzdC5lcShkaXNwbGF5SW5kZXgpO1xyXG4gICAgICAgIHZhciByZWdJdGVtVXAgPSB1cExpc3QuZXEodXBCdG5JbmRleCk7XHJcbiAgICAgICAgdmFyIHJlZ0l0ZW1Eb3duID0gZG93bkxpc3QuZXEoZG93bkJ0bkluZGV4KTtcclxuICAgICAgICB2YXIgcmVnSXRlbUZvckRlc2MgPSBkZXNjTGlzdC5lcShkaXNwbGF5SW5kZXgpO1xyXG5cclxuXHJcbiAgICAgICAgLy/QvtCx0L3QvtCy0LjRgtGC0Ywg0LrQsNGA0YLQvdC60YMg0LIg0LrQvtC90YLRgNC+0LvQsNGFXHJcbiAgICAgICAgdmFyIGRpc3BsYXkgPSAkKCcuc2xpZGVyX19kaXNwbGF5LXBpYycsICcuc2xpZGVyJyksXHJcbiAgICAgICAgICAgIG5leHREaXNwbGF5U3JjID0gJCgnaW1nJywgcmVnSXRlbUZvckRpc3BsYXkpLmF0dHIoJ3NyYycpLFxyXG4gICAgICAgICAgICBmYWRlZE91dCA9ICQuRGVmZXJyZWQoKTtcclxuICAgICAgICBkaXNwbGF5LmZhZGVPdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGZhZGVkT3V0LnJlc29sdmUoKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZmFkZWRPdXQuZG9uZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vcHJlbG9hZGVyLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgIGRpc3BsYXkuYXR0cignc3JjJywgbmV4dERpc3BsYXlTcmMpLm9uKCdsb2FkJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIC8vbG9hZGVkLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXkuZmFkZUluKDMwMCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICBkaXNwbGF5QWN0aXZlSXRlbS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgcmVnSXRlbUZvckRpc3BsYXkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAvL9Cf0L7QvNC10L3Rj9C10Lwg0L7Qv9C40YHQsNC90LjQtSDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgICAgZGVzY0FjdGl2ZUl0ZW0ucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIHJlZ0l0ZW1Gb3JEZXNjLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcblxyXG4gICAgICAgIC8v0L7QsdC90L7QstC40YLRgtGMINC60LDRgNGC0L3QutGDINCyINC60LvQuNC60L3Rg9GC0L7QvCDQutC+0L3RgtGA0L7Qu9C1XHJcbiAgICAgICAgdXBBY3RpdmVJdGVtLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAndG9wJzogICctMTAwJSdcclxuICAgICAgICB9LCBkdXJhdGlvbik7XHJcblxyXG4gICAgICAgIHJlZ0l0ZW1VcC5hbmltYXRlKHtcclxuICAgICAgICAgICAgJ3RvcCc6IDBcclxuICAgICAgICB9LCBkdXJhdGlvbiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB1cEFjdGl2ZUl0ZW0ucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAuY3NzKCd0b3AnLCAnMTAwJScpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgIGluUHJvY2VzcyA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL9C+0LHQvdC+0LLQuNGC0YLRjCDQutCw0YDRgtC90LrRgyDQsiDQv9Cw0YHRgdC40LLQvdC+0Lwg0LrQvtC90YLRgNC+0LvQtVxyXG5cclxuICAgICAgICBkb3duQWN0aXZlSXRlbS5hbmltYXRlKHtcclxuICAgICAgICAgICAgJ3RvcCc6ICAnMTAwJSdcclxuICAgICAgICB9LCBkdXJhdGlvbik7XHJcblxyXG4gICAgICAgIHJlZ0l0ZW1Eb3duLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAndG9wJzogMFxyXG4gICAgICAgIH0sIGR1cmF0aW9uLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGRvd25BY3RpdmVJdGVtLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgLmNzcygndG9wJywgJy0xMDAlJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgaW5Qcm9jZXNzID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7IC8v0LfQtNC10YHRjCDQvdCwINGA0L7QtNC40YLQtdC70Y8g0L3Rg9C20L3QviDQvdCw0LLQtdGB0LjRgtGMXHJcbiAgICAgICAgICAgICQoJyNzbGlkZXJVcEFycm93Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGlmICghaW5Qcm9jZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5Qcm9jZXNzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBtb3ZlU2xpZGUoJ3VwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJCgnI3NsaWRlckRvd25BcnJvdycpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWluUHJvY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGluUHJvY2VzcyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG1vdmVTbGlkZSgnZG93bicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXItLTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KCkpO1xyXG5cclxuLypzbGlkZXIgZmluaXNoKi9cclxuXHJcblxyXG5cclxuLy8gZmxpcHBlclxyXG52YXIgZmxpcHBlciA9IChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIGZsaXBwZXIgPSAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZsaXBwZXInKTtcclxuICAgIHZhciBhdXRoQnRuID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRoQnRuJyk7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmlkKTtcclxuICAgICAgICBpZihlLnRhcmdldC5pZD09XCJhdXRoQnRuXCIpe1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGZsaXBwZXIuY2xhc3NMaXN0LmFkZCgnaG92ZXInKTtcclxuXHJcbiAgICAgICAgfWVsc2Uge1xyXG5cclxuICAgICAgICAgICAgZmxpcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcblxyXG59KCkpO1xyXG4iXX0=
