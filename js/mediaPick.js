/*미디어 추천 슬라이드*/

$(function(){
            
    
    var i=0;

    //자동으로 넘어가는 슬라이드
    function mediaSlide(){
        $(".media_wrap > ul").stop().animate({marginLeft:-363},300,function(){
            $(".media_wrap > ul > li:first").appendTo(".media_wrap > ul");
            $(".media_wrap > ul").css({marginLeft:0})

            i++;
            var dot = $(".dot > li");

            if(i >= dot.length){
                i=0;
            }

            $(".dot > li").removeClass("on");
            $(".dot > li").eq(i).addClass("on")
        })

        
    }
    
    //4초마다 함수실행
    let media_ani = setInterval(mediaSlide, 4000)

    /*이전 버튼 눌렀을 때*/
    $(".media_prev").click(function(){
        mediaPrev();
    });

    //이전 함수 실행
    function mediaPrev(){
        $(".media_wrap > ul").css({marginLeft:-363})
        $(".media_wrap > ul > li:last").prependTo(".media_wrap > ul");
        $(".media_wrap > ul").stop().animate({marginLeft:0})


        i--;
        var dot = $(".dot > li");

        if (i < 0){
            i = dot.length-1
        }

        $(".dot > li").removeClass("on");
        $(".dot > li").eq(i).addClass("on")
        
    }

    //다음 버튼 눌렀을 때,
    $(".media_next").click(function(){
        mediaNext();
    });

    //다음 함수 실행
    function mediaNext(){
        $(".media_wrap > ul").stop().animate({marginLeft:-363},300,function(){
            $(".media_wrap > ul > li:first").appendTo(".media_wrap > ul");
            $(".media_wrap > ul").css({marginLeft:0})

            i++;
            var dot = $(".dot > li");

            if(i >= dot.length){
                i=0;
            }

            $(".dot > li").removeClass("on");
            $(".dot > li").eq(i).addClass("on")


        })
    }

    //버튼들에 손 올렸을 때 자동으로 넘어가는 것 멈춤
    $(".main3_conBox > span").mouseover(function(){
        clearInterval(media_ani)
        $(this).css("color","#ef544d")
    }).mouseout(function(){
        media_ani = setInterval(mediaSlide, 4000)
        $(this).css("color","#ccc")
    });


    //이거 안됨. 도트 눌렀을 때 해당 이미지로 이동하는 거
    $(".dot").mouseover(function(){
        clearInterval(media_ani);
    }).mouseout(function(){
        media_ani = setInterval(mediaSlide, 4000)
    });

    $(".dot li").click(function(){
        $(".media_wrap > ul").stop().animate({marginLeft:-363*(this).index()},500);
        
    });

    
});