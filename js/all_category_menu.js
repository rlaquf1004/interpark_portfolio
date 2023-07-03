//전체카테고리 slideToggle

$(function(){
    $(".all_category > li").click(function(){
        $("#all_category_menu").stop().slideToggle();

        $(".Cmenu_under_wrap").click(function(){
            $("#all_category_menu").stop().slideUp();
        });
    });

});