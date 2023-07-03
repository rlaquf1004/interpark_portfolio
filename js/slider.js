/*슬라이더 스크립트*/

$(function(){
    
    let i=0;
    $(".S_bottom_ul li").eq(i).css("border-top","3px solid #ef544d")
    $(".S_bottom_ul li").mouseover(function(){
        i =$(this).index()
    });


function slide(){
    i++; 

    if (i > $(".slider_page:last").index() ){
        i=0;
    }

    $(".slider_page").eq(i).stop().fadeIn("slow");
    $(".slider_page").eq(i-1).stop().fadeOut("slow")


    if (i==1){
        $(".slider_top_box").css("background","#fff")
        $(".S_bottom_ul li").eq(i-1).css("border-top","none")
        $(".S_bottom_ul li").eq(i).css("border-top","3px solid #ef544d")
    } else if (i==2){
        $(".slider_top_box").css("background","#fff")
        $(".S_bottom_ul li").eq(i-1).css("border-top","none")
        $(".S_bottom_ul li").eq(i).css("border-top","3px solid #ef544d")
    } else if (i==3){
        $(".slider_top_box").css("background","#fff")
        $(".S_bottom_ul li").eq(i-1).css("border-top","none")
        $(".S_bottom_ul li").eq(i).css("border-top","3px solid #ef544d")
    } else { //i가 0일때
        $(".slider_top_box").css("background","#fff")
        $(".S_bottom_ul li").eq(i-1).css("border-top","none")
        $(".S_bottom_ul li").eq(i).css("border-top","3px solid #ef544d")
    }
}

$(".S_bottom_ul li").eq(0).mouseover(function(){
    $(".slider_top_box").css("background","#fff")
    $(".S_bottom_ul li").css("border-top","none")
    $(this).css("border-top","3px solid #ef544d")
    $(".slider_page").stop().hide();
    $(".slider_page").eq(0).stop().show();
});

$(".S_bottom_ul li").eq(1).mouseover(function(){
    $(".slider_top_box").css("background","#fff")
    $(".S_bottom_ul li").css("border-top","none")
    $(this).css("border-top","3px solid #ef544d")
    $(".slider_page").stop().hide();
    $(".slider_page").eq(1).stop().show();
});

$(".S_bottom_ul li").eq(2).mouseover(function(){
    $(".slider_top_box").css("background","#fff")
    $(".S_bottom_ul li").css("border-top","none")
    $(this).css("border-top","3px solid #ef544d")
    $(".slider_page").stop().hide();
    $(".slider_page").eq(2).stop().show();
});

$(".S_bottom_ul li").eq(3).mouseover(function(){
    $(".slider_top_box").css("background","#fff")
    $(".S_bottom_ul li").css("border-top","none")
    $(this).css("border-top","3px solid #ef544d")
    $(".slider_page").stop().hide();
    $(".slider_page").eq(3).stop().show();
});

let ani = setInterval (slide,3000)

$(".S_bottom_ul li").mouseover(function(){
    clearInterval(ani);
}).mouseout(function(){
    ani= setInterval(slide,3000)

});



});