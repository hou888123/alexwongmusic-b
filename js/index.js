$(function(){
    $('.right_menu_btn,.menu_bg,.right_menu a').on('click',function(){
        $('.right_menu,.menu_bg,.right_menu_btn').toggleClass('open');
    });
    $("body").overlayScrollbars({
        className:'os-theme-dark',
        callbacks :{
            onScroll : (e)=> {
                e.target.scrollTop? $('header,.go_top').addClass('onScroll') :$('header,.go_top').removeClass('onScroll');
            },
            onScrollStop : (e)=> {
                document.cookie = "scrollTop=" + e.target.scrollTop;
            },
            onInitialized : function() {
                if (document.cookie.match(/scrollTop=([^;]+)(;|$)/) != null) {  
                    var arr = document.cookie.match(/scrollTop=([^;]+)(;|$)/); //cookies中不為空，則讀取滾動條位置  
                    $(this)[0].scroll([ 0, parseInt(arr[1]) ], 0);
                }  
            }
        }
    });
    $('.go_top').on('click',function(){
        var instance = OverlayScrollbars(document.body); 
        instance.scroll([ 0, 0], 300);
    });
    $('.go').on('click',function(){
        var instance = OverlayScrollbars(document.body); 
        instance.scroll([ 0, $(`._${$(this).attr('class').split("_")[1]}`)[0].offsetTop - $("header").height() ], 300);
    });
    $('.scroll_down').on('click',function(){
        var instance = OverlayScrollbars(document.body); 
        instance.scroll([ 0, $(`._news`)[0].offsetTop/1.2 - $("header").height() ], 300);
    });
});
window.onload=()=>{
    var iPhone = ( navigator.userAgent.match(/(iPhone|iPod)/i) ? true : false );
    if (iPhone) {
        window.scrollTo(0, 1);
    }
};
