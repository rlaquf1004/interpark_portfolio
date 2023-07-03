/*베스트셀러 스크립트*/
$(function(){
    $(".day_box").find("li:last-child").mouseover(function(){
        $(".content_box2_weekly").stop().show();
        $(".content_box1_today").stop().hide();

        $(".day_box > ul > li:last-child").css({"border-bottom":"none", "border-left":"1px solid #b3b3b3"})
        $(".day_box > ul > li:first-child").css({"border-bottom":"1px solid #b3b3b3", "border-right":"1px solid rgba(27, 27, 27, 0.2)"})
    });

    $(".day_box").find("li:first-child").mouseover(function(){
        $(".content_box1_today").stop().show();
        $(".content_box2_weekly").stop().hide();

        $(".day_box > ul > li:first-child").css({"border-bottom":"none", "border-right":"1px solid #b3b3b3"})
        $(".day_box > ul > li:last-child").css({"border-bottom":"1px solid #b3b3b3", "border-left":"1px solid rgba(27, 27, 27, 0.2)"})
    });

});