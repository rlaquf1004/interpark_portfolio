/*슬라이더 사이드 배너*/

$(function(){

    $(".Mover_banner").mouseover(function(){
        if($(".Mover_banner_imgage").css("display")=="none"){
            $(".Mover_banner_imgage").stop().animate({
                width:"toggle",
                height:"toggle",
                opacity:"1"
            },650);
        }
    });

    //오늘하루안보기
    $(".Clos_notToday_btn").click(function(){
        $(".Mover_banner_imgage").stop().animate({
            width:"toggle",
            height:"toggle",
            opacity:"0"

        },650);
    });

    //닫기
    $(".Clos_btn").click(function(){
        $(".Mover_banner_imgage").stop().animate({
            width:"toggle",
            height:"toggle",
            opacity:"0"
        },650);
    });
});