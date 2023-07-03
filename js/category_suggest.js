/*분야별 추천 li 스크립트*/


$(function(){
    var i=0;

    $("#main5 > .main5_box >.categoryTab > li").mouseover(function(){
        i= $(this).index()
        $(".main5_box > div").stop().hide();

        $(".categoryTab > li").css({
            "border-bottom":"none",
            "color":"#000"

        })

        $(".categoryTab > li:hover").css({
            "border-bottom":"2px solid #e66a57",
            "color":"#e66a57"
        })

        $(".main5_box > div").eq(i).stop().fadeIn("fast");



        

    });


    // li에 마우스 올리면 밑에 배너 바뀌는 것
    if($(".main5_box >.categoryTab > li:first-of-type").mouseover()){
        $(".banner_box > ul > li").stop().hide();
        $(".banner_box > ul > li:first-child").stop().show();

    } else if($(".main5_box >.categoryTab > li:nth-of-type(2)")){
        $(".banner_box > ul > li").stop().hide();
        $(".banner_box > ul > li:nth-child(2)").stop().show();

    } else if($(".main5_box >.categoryTab > li:nth-of-type(3)")){
        $(".banner_box > ul > li").stop().hide();
        $(".banner_box > ul > li:nth-child(3)").stop().show();
    }

});