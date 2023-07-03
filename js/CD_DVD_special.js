$(function(){

    //CD 이전 버튼 
    $(".CD_prev").click(function(){

        $(".CD_content > ul").css({marginLeft:-320});
        $(".CD_content > ul > li:last").prependTo(".CD_content > ul")
        $(".CD_content > ul").stop().animate({marginLeft:0})
    });


    //CD 다음 버튼
    $(".CD_next").click(function(){

        $(".CD_content > ul").stop().animate({marginLeft:-320},function(){
            $(".CD_content > ul > li:first").appendTo(".CD_content > ul")
            $(".CD_content > ul").css({marginLeft:-0});
        })    
    });


    //DVD 이전 버튼 
    $(".DVD_prev").click(function(){

        $(".DVD_content > ul").css({marginLeft:-320});
        $(".DVD_content > ul > li:last").prependTo(".DVD_content > ul")
        $(".DVD_content > ul").stop().animate({marginLeft:0})
    });


    //DVD 다음 버튼
    $(".DVD_next").click(function(){

        $(".DVD_content > ul").stop().animate({marginLeft:-320},function(){
            $(".DVD_content > ul > li:first").appendTo(".DVD_content > ul")
            $(".DVD_content > ul").css({marginLeft:-0});
        })    
    });



    //특별판 이전 버튼 
    $(".special_prev").click(function(){

        $(".special_content > ul").css({marginLeft:-215});
        $(".special_content > ul > li:last").prependTo(".special_content > ul")
        $(".special_content > ul").stop().animate({marginLeft:0})
    });


    //특별판 다음 버튼
    $(".special_next").click(function(){

        $(".special_content > ul").stop().animate({marginLeft:-215},function(){
            $(".special_content > ul > li:first").appendTo(".special_content > ul")
            $(".special_content > ul").css({marginLeft:-0});
        })    
    });



    //마우스 올리면 색 변함
    $(".M7_content_box1 > span").mouseover(function(){
        $(this).css("color","#f7695b")
    }).mouseout(function(){
        $(this).css("color","#ccc")
    });

    
    $(".M7_content_box3 > span").mouseover(function(){
        $(this).css("color","#f7695b")
    }).mouseout(function(){
        $(this).css("color","#ccc")
    });


});