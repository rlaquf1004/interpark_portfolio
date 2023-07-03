$(function(){


    //소설분야
    function fiction(){

        $(".slideHide1 > ul").stop().animate({marginLeft:-160},function(){
            $(".slideHide1 > ul > li:first").appendTo(".slideHide1 > ul")
            $(".slideHide1 > ul").css({marginLeft:0});
        })
    }

    var Fiction = setInterval(fiction,2000)

    //소설 이전버튼
    function fictionPrev(){
        $(".slideHide1 > ul").css({marginLeft:-160});
        $(".slideHide1 > ul > li:last").prependTo(".slideHide1 > ul")
        $(".slideHide1 > ul").stop().animate({marginLeft:0})
    }

    //소설 다음버튼
    function fictionNext(){
        $(".slideHide1 > ul").stop().animate({marginLeft:-160},function(){
            $(".slideHide1 > ul > li:first").appendTo(".slideHide1 > ul")
            $(".slideHide1 > ul").css({marginLeft:0});
        })
    }

    $(".Fiction_book > .recommend_prev1").click(function(){
        fictionPrev();
    });

    $(".Fiction_book > .recommend_next1").click(function(){
        fictionNext();
    });

    $(".Fiction_book > span").mouseover(function(){
        clearInterval(Fiction)
        $(this).css("color","#ef544d")

    }).mouseout(function(){
        Fiction = setInterval(fiction,2000)
        $(this).css("color","#ccc")
    });





    //이 책을 조회한 회원들이 같이 본 책
    function check(){

        $(".slideHide2 > ul").stop().animate({marginLeft:-160},function(){
            $(".slideHide2 > ul > li:first").appendTo(".slideHide2 > ul")
            $(".slideHide2 > ul").css({marginLeft:0});
        })
    }

    var check_book = setInterval(check,2000)

    //이 책 조회 이전버튼
    function checkPrev(){
        $(".slideHide2 > ul").css({marginLeft:-160});
        $(".slideHide2 > ul > li:last").prependTo(".slideHide2 > ul")
        $(".slideHide2 > ul").stop().animate({marginLeft:0})
    }

    //이 책 조회 다음버튼
    function checkNext(){
        $(".slideHide2 > ul").stop().animate({marginLeft:-160},function(){
            $(".slideHide2 > ul > li:first").appendTo(".slideHide2 > ul")
            $(".slideHide2 > ul").css({marginLeft:0});
        })
    }

    $(".check_book > .recommend_prev2").click(function(){
        checkPrev();
    });

    $(".check_book > .recommend_next2").click(function(){
        checkNext();
    });

    
    $(".check_book > span").mouseover(function(){
        clearInterval(check_book)
        $(this).css("color","#ef544d")

    }).mouseout(function(){
        check_book = setInterval(check,2000)
        $(this).css("color","#ccc")
    });





    //이 책을 구매한 회원들이 같이 구매한 책
    function buy_book(){

        $(".slideHide3 > ul").stop().animate({marginLeft:-160},function(){
            $(".slideHide3 > ul > li:first").appendTo(".slideHide3 > ul")
            $(".slideHide3 > ul").css({marginLeft:0});
        })
    }

    var buyBook = setInterval(buy_book,2000)

    //이 책 구매 이전버튼
    function buyPrev(){
        $(".slideHide3 > ul").css({marginLeft:-160});
        $(".slideHide3 > ul > li:last").prependTo(".slideHide3 > ul")
        $(".slideHide3 > ul").stop().animate({marginLeft:0})
    }

    //이 책 구매 다음버튼
    function buykNext(){
        $(".slideHide3 > ul").stop().animate({marginLeft:-160},function(){
            $(".slideHide3 > ul > li:first").appendTo(".slideHide3 > ul")
            $(".slideHide3 > ul").css({marginLeft:0});
        })
    }

    $(".buy_book > .recommend_prev3").click(function(){
        buyPrev();
    });

    $(".buy_book > .recommend_next3").click(function(){
        buykNext();
    });


    $(".buy_book > span").mouseover(function(){
        clearInterval(buyBook)
        $(this).css("color","#ef544d")

    }).mouseout(function(){
        buyBook = setInterval(buy_book,2000)
        $(this).css("color","#ccc")
    });


















});