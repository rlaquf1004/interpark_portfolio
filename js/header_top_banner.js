/*맨 위 배너 없애는 스크립트*/

$(function(){
    $(".top_banner_right").find("span").children().click(function(){
        $("#top_banner_wrap").stop().hide();
    })
    

});