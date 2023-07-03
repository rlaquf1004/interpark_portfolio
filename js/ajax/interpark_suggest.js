//인터파크 추천 책

$(function(){

    //첫번째 책
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data:{ query:"물만난 물고기"},
        headers:{Authorization: "KakaoAK 673607ea05520afa978959ca1c6e8503"}
    })
    .done(function( msg ) {
        console.log( msg );
    
        var li = $(".IPick_slide > li");
    
        

        for(var i=0; i < li.length; i++){
            
            $(".IPick_slide > li:first()").find(".bookImg_box > img").attr("src" , msg.documents[i].thumbnail)
            $(".IPick_slide > li:first()").find(".suggest_title").text(msg.documents[i].title)

            var str=msg.documents[i].contents;
            var str2 =str.substring(0,80);

            $(".IPick_slide > li:first()").find(".introduce_text > p").text(str2 + "...")
        
        }
    
    });


    //두번째 책
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data:{ query: "메리골드 마음 세탁소"},
        headers:{Authorization: "KakaoAK 673607ea05520afa978959ca1c6e8503"}
    })
    .done(function( msg ) {
        console.log( msg );
    
        var li = $(".IPick_slide > li");
    
        for(var i=0; i < li.length; i++){
            
            $(".IPick_slide > li:nth-child(2)").find(".bookImg_box > img").attr("src" , msg.documents[i].thumbnail)
            $(".IPick_slide > li:nth-child(2)").find(".suggest_title").text(msg.documents[i].title)

            var str=msg.documents[i].contents;
            var str2 =str.substring(0,80);

            $(".IPick_slide > li:nth-child(2)").find(".introduce_text > p").text(str2 + "...")
        
        }
    
    });


    //세번째 책
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data:{ query: "미드나잇 라이브러리"},
        headers:{Authorization: "KakaoAK 673607ea05520afa978959ca1c6e8503"}
    })
    .done(function( msg ) {
        console.log( msg );
    
        var li = $(".IPick_slide > li");
    
        for(var i=0; i < li.length; i++){
            
            $(".IPick_slide > li:nth-child(3)").find(".bookImg_box > img").attr("src" , msg.documents[i].thumbnail)
            $(".IPick_slide > li:nth-child(3)").find(".suggest_title").text(msg.documents[i].title)

            var str=msg.documents[i].contents;
            var str2 =str.substring(0,80);

            $(".IPick_slide > li:nth-child(3)").find(".introduce_text > p").text(str2 + "...")
        
        }
    
    });


    //네번째 책
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data:{ query: "슬램덩크"},
        headers:{Authorization: "KakaoAK 673607ea05520afa978959ca1c6e8503"}
    })
    .done(function( msg ) {
        console.log( msg );
    
        var li = $(".IPick_slide > li");
    
        for(var i=0; i < li.length; i++){
            
            $(".IPick_slide > li:nth-child(4)").find(".bookImg_box > img").attr("src" , msg.documents[i].thumbnail)
            $(".IPick_slide > li:nth-child(4)").find(".suggest_title").text(msg.documents[i].title)

            var str=msg.documents[i].contents;
            var str2 =str.substring(0,80);

            $(".IPick_slide > li:nth-child(4)").find(".introduce_text > p").text(str2 + "...")
        
        }
    
    });



});