//이 책 어때?  스크립트

$(function(){

    var i = $(".dot2 li.on2").index();
    var leng = $(".thisBook > li").length;

    //이전 버튼
    $(".this_prev").click(function(){
        if(i==0){
            i = leng-1;
        } else {
            i= i-1;
        }

        slideFade();
    });

    //다음 버튼
    $(".this_next").click(function(){
        if(i==1){
            i = 0;
        } else {
            i= i+1;
        }

        slideFade();
    });

    //도트 li 클릭시 해당 페이지
    $(".dot2 li").click(function(){
        i = $(this).index();
        slideFade();
    });

    //페이드 인 아웃
    function slideFade(){
        $(".dot2 li").removeClass("on2");
        $(".dot2 li").eq(i).addClass("on2");
        $(".thisBook > li").stop(true, true).fadeOut();
        $(".thisBook > li").eq(i).stop(true, true).fadeIn();

    }


    $(".thisBook_wrap > span").hover(function(){
        $(this).css("color","#ef544d")
    },function(){
        $(this).css("color","#ccc")
    });



});