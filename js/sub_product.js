//상품설명칸 주문수량, 찜하기

$(function(){

    var i=1;
    //+버튼
    $(".order_btn > .plus").click(function(){
        i++;
        $(".ch_num").text(i)

    });

    //-버튼
    $(".order_btn > .minus").click(function(){
        
        if(i>1){
            i--;
            $(".ch_num").text(i)
        }

    });




    //찜하기 하트
    $(".product_btn_box > button:last").click(function(){
        $("#heart2").toggle();
        $("#heart1").toggle();
        $("#p").toggle();
        $("#m").toggle();
    });



});