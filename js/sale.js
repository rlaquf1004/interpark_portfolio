/*특가할인-정가인하 스크립트*/

$(function(){


    $(".M6sale_Title > li").mouseover(function(){
        var i = $(this).index();

        $(".M6sale_Title > li").removeClass("saleOn");
        
        $(this).addClass("saleOn");
        

        

        $(".M6sale_Content > li").removeClass("M6saleOn")
        $(".M6sale_Content > li").eq(i).addClass("M6saleOn")
    });


});