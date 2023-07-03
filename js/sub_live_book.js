//라이브북 스크립트

$(function(){

var index = 0;

//사진 누르면 해당 사진으로 이동
$(".book_choice > li").eq(0).css("border","2px solid purple");


$(".book_choice > li").click(function(){
    index = $(this).index();

    $(".live_overF > ul").stop().animate({marginLeft:-(index*365)},300);

    $(".book_choice > li").eq(index).css("border","2px solid purple").siblings().css("border","none")

});


//버튼 누르면 이전
$(".Li_prev").click(function(){
    if(index > 0){
        index--;
        $(".live_overF > ul").stop().animate({marginLeft:-(index*365)});

        $(".book_choice > li").eq(index).css("border","2px solid purple").siblings().css("border","none");
        
    } else { 
        index = 9; // 마지막 사진 인덱스로 설정
        $(".live_overF > ul").stop().animate({marginLeft:-(index*365)});

        $(".book_choice > li").eq(index).css("border","2px solid purple").siblings().css("border","none");
    }
});


// 다음 버튼
$(".Li_next").click(function(){
    if(index < 9){
        index++;
        $(".live_overF > ul").stop().animate({marginLeft:-(index*365)})

        $(".book_choice > li").eq(index).css("border","2px solid purple").siblings().css("border","none")
        
    } else { 
        index = 0;
        $(".live_overF > ul").stop().animate({marginLeft:0})

        $(".book_choice > li").eq(index).css("border","2px solid purple").siblings().css("border","none")
    }
});




























});