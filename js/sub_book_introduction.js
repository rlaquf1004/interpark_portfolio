// 펼쳐보기

$(function(){

    //책소개
    $(".unfold").click(function(){
        $("#end_intro").show();
        $(".fold").show();
        $(this).hide();

    });

    $(".fold").click(function(){
        $("#end_intro").hide();
        $(".unfold").show();
        $(this).hide();

    });



    //출판사 서평
    $(".unfold2").click(function(){
        $("#end_publisher").show();
        $(".fold2").show();
        $(this).hide();

    });

    $(".fold2").click(function(){
        $("#end_publisher").hide();
        $(".unfold2").show();
        $(this).hide();

    });


    //목차
    $(".unfold3").click(function(){
        $("#end_index").show();
        $(".fold3").show();
        $(this).hide();

    });

    $(".fold3").click(function(){
        $("#end_index").hide();
        $(".unfold3").show();
        $(this).hide();

    });


    //본문 중에서
    $(".unfold4").click(function(){
        $("#end_main_text").show();
        $(".fold4").show();
        $(this).hide();

    });

    $(".fold4").click(function(){
        $("#end_main_text").hide();
        $(".unfold4").show();
        $(this).hide();

    });





});