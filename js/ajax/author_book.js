
//저자의 다른 책
$(function(){

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data:{ query:"이찬혁" ,target:"title(에일리언)"},
        headers:{Authorization: "KakaoAK 673607ea05520afa978959ca1c6e8503"}
    })
    .done(function( msg ) {
        console.log( msg );
        
        
        var divs = document.getElementsByTagName('div');

        for(var i=0; i < divs.length; i++){
            $(".author_book > ul > li:first-child").find("img").attr("src", msg.documents[i].thumbnail)
            $(".author_book > ul > li:first-child").find("p:first-child").text(msg.documents[i].title)
            $(".author_book > ul > li:first-child").find("del").text(msg.documents[i].price +"원")
            $(".author_book > ul > li:first-child").find("span").text(msg.documents[i].sale_price)
        }
    
    });



    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data:{ query:"이찬혁" },
        headers:{Authorization: "KakaoAK 673607ea05520afa978959ca1c6e8503"}
    })
    .done(function( msg ) {
        console.log( msg );
        
        
        var divs = document.getElementsByTagName('div');

        for(var i=0; i < divs.length; i++){
            $(".author_book > ul > li:last-child ").find("img").attr("src", msg.documents[i].thumbnail)
            $(".author_book > ul > li:last-child").find("p:first-child").text(msg.documents[i].title)
            $(".author_book > ul > li:last-child").find("del").text(msg.documents[i].price +"원")
            $(".author_book > ul > li:last-child").find("span").tex(msg.documents[i].sale_price)
        }
    
    });


});