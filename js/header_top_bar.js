/*헤더 바에 마우스 오버*/

$(function(){
    
    //마이페이지 ul
    $(".myPage").mouseover(function(){
        $(this).children(".smallMy").stop().show();
    
    }).mouseout(function(){
        $(".smallMy").stop().stop().hide();
    });

    //Language
    $(".Language").mouseover(function(){
        $(this).children(".smallLang").stop().show();
    }).mouseout(function(){
        $(".smallLang").stop().hide();
    });



});