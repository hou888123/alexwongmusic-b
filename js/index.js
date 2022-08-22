$(function(){
    $('.right_menu_btn,.menu_bg,.right_menu a').on('click',function(){
        $('.right_menu,.menu_bg,.right_menu_btn').toggleClass('open');
    });
    $(window).scroll(function(){
        $(this).scrollTop()?$('header,.go_top').addClass('onScroll') :$('header,.go_top').removeClass('onScroll');
    });
    $('.go_top,header p').on('click',function(){
        $('html, body').animate({scrollTop:0}, 300);
    });
    $('.go').on('click',function(){
        $('html, body').animate({scrollTop:$(`._${$(this).attr('class').split('_')[1]}`)[0].offsetTop - $('header').height()}, 300);
    });
    $('.scroll_down').on('click',function(){
        $('html, body').animate({scrollTop:$('._news')[0].offsetTop/1.2 - $('header').height()}, 300);
    });
    if (document.cookie.match(/scrollTop=([^;]+)(;|$)/) != null) {  
        var arr = document.cookie.match(/scrollTop=([^;]+)(;|$)/); //cookies中不為空，則讀取滾動條位置  
        $(window).scrollTop(parseInt(arr[1]));
        $('header,.go_top').addClass('onScroll')
    }  
});

var isScrolling;
window.addEventListener('scroll', function ( event ) {
	window.clearTimeout( isScrolling );
	isScrolling = setTimeout(function() {
		document.cookie = 'scrollTop=' + $(this).scrollTop();
	}, 66);
}, false);