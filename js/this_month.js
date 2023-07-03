//주목! 이달의 책 

$(function(){

    var i=1

    //자동으로 넘어가는 js
    function monthSlide(){
        $(".M6box1_content_wrap > .M6point_ul ").stop().animate({marginLeft:-345},function(){
            $(".M6point_ul > li:first").appendTo(".M6point_ul");
            $(".M6point_ul").css({marginLeft:0})
        })

        i++;

        if(i>=5){
            i=1
        }

        $(".current_number").text(i)

    }

    
    var Monthani = setInterval (monthSlide,3000)   
    


    //이전 버튼
    function Monthprev (){
        $(".M6box1_content_wrap > .M6point_ul").css({marginLeft:-345});
        $(".M6point_ul > li:last").prependTo(".M6point_ul");
        $(".M6point_ul").stop().animate({marginLeft:0})

        i--

        if(i<1){
            i=4
        }

        $(".current_number").text(i)
    }

    //다음 버튼
    function Monthnext(){
        $(".M6box1_content_wrap > .M6point_ul ").stop().animate({marginLeft:-345},function(){
            $(".M6point_ul > li:first").appendTo(".M6point_ul");
            $(".M6point_ul").css({marginLeft:0})

        i++

        if(i>=5){
            i=1
        }

        $(".current_number").text(i)
        })

    }

    //이전 버튼 클릭시 이전으로 이동
    $(".page_btn > .month_prev").click(function(){
        Monthprev();

    });

    //다음 버튼 클릭시 다음으로 이동
    $(".page_btn > .month_next").click(function(){
        Monthnext();

    });


    //버튼에 마우스 올리면 슬라이드 멈춤
    $(".page_btn").mouseover(function(){
        clearInterval(Monthani)
    }).mouseout(function(){
        Monthani = setInterval (monthSlide,3000)
    });


    //css
    $(".page_btn > .month_prev").mouseover(function(){
        $(this).css("background-color","#eee");
    }).mouseout(function(){
        $(this).css("background","none")
    });

    $(".page_btn > .month_next").mouseover(function(){
        $(this).css("background-color","#eee");
    }).mouseout(function(){
        $(this).css("background","none")
    });

});