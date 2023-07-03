//책 들 추천 오픈 api

$(function(){

    //소설 분야에서 많은 회원이 구매한 책
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "소설" },
        headers: {Authorization:" KakaoAK 673607ea05520afa978959ca1c6e8503"}
        })
    
        .done(function( msg ) {
        console.log(msg)
    
        var divs = document.getElementsByTagName('div');

        for(var i=0; i< divs.length; i++){
    
        $(".slideHide1 > ul > li").eq(i).find("img").attr("src",msg.documents[i].thumbnail);
        $(".slideHide1 > ul > li").eq(i).children("p").text(msg.documents[i].title);
    
        }
        });



        //이 책을 조회한 회원들이 같이 본 책
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "고래" },
            headers: {Authorization:" KakaoAK 673607ea05520afa978959ca1c6e8503"}
            })
        
            .done(function( msg ) {
            console.log(msg)
        
            var divs = document.getElementsByTagName('div');
    
            for(var i=0; i< divs.length; i++){
        
            $(".slideHide2 > ul > li").eq(i).find("img").attr("src",msg.documents[i].thumbnail);
            $(".slideHide2 > ul > li").eq(i).children("p").text(msg.documents[i].title);
        
            }
            });



            //이 책을 구매한 회원들이 구매한 책
            $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "프레드릭 배크만" },
                headers: {Authorization:" KakaoAK 673607ea05520afa978959ca1c6e8503"}
                })
            
                .done(function( msg ) {
                console.log(msg)
            
                var divs = document.getElementsByTagName('div');
        
                for(var i=0; i< divs.length; i++){
            
                $(".slideHide3 > ul > li").eq(i).find("img").attr("src",msg.documents[i].thumbnail);
                $(".slideHide3 > ul > li").eq(i).children("p").text(msg.documents[i].title);
            
                }
                });








});