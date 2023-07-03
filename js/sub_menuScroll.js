//네비 누르면 해당 페이지로 스크롤

    function menuScroll(ele){
        var ele = $(ele);
        var page = ele.offset().top;
        $('html, body').animate({scrollTop:page -50})
    }



//클릭한 네비의 css가 바뀜
$(function(){

    $(".sub_menu_list > li").click(function(){
        var index = $(this).index();
        $(".sub_menu_list > li").removeClass("on1")
        $(".sub_menu_list > li").eq(index).addClass("on1")
    });


});



