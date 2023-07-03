/*메인 사이드 넘기는 스크립트*/

$(function(){

    $(".prevBtn").click(function(){
        $(".Mleft_side li:last").prependTo(".Mleft_side")
        $(".Mleft_side").css({marginLeft:-90})
        $(".Mleft_side").stop().animate({marginLeft:0},"fast");
    });

    $(".nextBtn").click(function(){
        $(".Mleft_side").stop().animate({marginLeft:-90},"fast",function(){
            $(".Mleft_side li:first").appendTo(".Mleft_side");
            $(".Mleft_side").css({marginLeft:0})
        })
    });
});