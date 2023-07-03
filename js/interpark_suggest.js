//인터파크 추천 슬라이드
$(function(){

    
    function sujestSlide(){
        $(".IPick_slide").stop().animate({marginLeft:-465},300,function(){
            $(".IPick_slide > li:first").appendTo(".IPick_slide");
            $(".IPick_slide").css({marginLeft:0})
        })

    }

    
    //이전 버튼
    function sujest_prev(){
        $(".IPick_slide li:last").prependTo(".IPick_slide")
        $(".IPick_slide").css({marginLeft:-465});
        $(".IPick_slide").stop().animate({marginLeft:0})
    }

    //다음 버튼
    function sujest_next(){
        $(".IPick_slide").stop().animate({marginLeft:-465},300,function(){
            $(".IPick_slide > li:first").appendTo(".IPick_slide");
            $(".IPick_slide").css({marginLeft:0})
        })

    }

    let ani = setInterval(sujestSlide, 3000);

    $(".Ipick_prev").click(function(){
        sujest_prev();
    });

    $(".Ipick_next").click(function(){
        sujest_next();
    });


    
    //버튼에 마우스 올리면 슬라이드 멈춤
    $(".Ipick_prev, .Ipick_next").mouseover(function(){
        clearInterval(ani)
        $(this).css("color","#ef544d")
    }).mouseout(function(){
        ani = setInterval(sujestSlide, 3000)
        $(this).css("color","#ccc")
    });


});