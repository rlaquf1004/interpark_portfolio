/*주목! 이달의 책 */

$(function(){


$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"소설" },
    headers:{Authorization: "KakaoAK 673607ea05520afa978959ca1c6e8503"}
})
.done(function( msg ) {
    console.log( msg );

    var month = $(".M6imgbox");
    
    for(var i=0; i < month.length; i++){
        $(month).eq(i).find("img").attr("src" , msg.documents[i].thumbnail)
        $(".M6content_box").eq(i).find("p").text(msg.documents[i].title)
        $(".M6content_box").eq(i).find("del").text(msg.documents[i].price + "원")
        $(".M6content_box").eq(i).find(".month_price").text(msg.documents[i].sale_price + "원")
    }

});

    
});