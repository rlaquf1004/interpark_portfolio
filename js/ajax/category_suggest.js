//분야별 추천- 문학 


$(function(){

    
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "문학" , sort: "accuracy" ,page:"39" },
        headers: {Authorization:" KakaoAK 673607ea05520afa978959ca1c6e8503"}
        })
    
        .done(function( msg ) {
        console.log(msg)
    
        var spin = $(".field_content > li ");
    
    
        for(var i=0; i< spin.length; i++){
    
        $("#main5_wrap1 > .field_box > .field_content > li").eq(i).find("img").attr("src",msg.documents[i+4].thumbnail);
        $("#main5_wrap1 > .field_box > .field_content > li").eq(i).find("h4").children("a").append(msg.documents[i+4].title);
        $("#main5_wrap1 > .field_box > .field_content > li").eq(i).find("span").append(msg.documents[i+4].price + "원"); 
    
        }
    
    
        });
    
    
    
    //분야별 추천- 인문/교양
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "인문/교양" , sort: "accuracy" , page:"17"},
        headers: {Authorization:" KakaoAK 673607ea05520afa978959ca1c6e8503"}
        })
    
        .done(function( msg ) {
        console.log(msg)
    
        var spin = $(".field_content > li ");
    
    
        for(var i=0; i< spin.length; i++){
    
        $("#main5_wrap2 > .field_box > .field_content > li").eq(i).find("img").attr("src",msg.documents[i].thumbnail);
        $("#main5_wrap2 > .field_box > .field_content > li").eq(i).find("h4").children("a").append(msg.documents[i].title);
        $("#main5_wrap2 > .field_box > .field_content > li").eq(i).find("span").append(msg.documents[i].price + "원"); 
    
        }
    
    
        });
    
    
    //분야별 추천- 경제/실용
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "경제" , sort: "accuracy" ,page:"16"},
        headers: {Authorization:" KakaoAK 673607ea05520afa978959ca1c6e8503"}
        })
    
        .done(function( msg ) {
        console.log(msg)
    
        var spin = $(".field_content > li ");
    
    
        for(var i=0; i< spin.length; i++){
    
        $("#main5_wrap3 > .field_box > .field_content > li").eq(i).find("img").attr("src",msg.documents[i].thumbnail);
        $("#main5_wrap3 > .field_box > .field_content > li").eq(i).find("h4").children("a").append(msg.documents[i].title);
        $("#main5_wrap3 > .field_box > .field_content > li").eq(i).find("span").append(msg.documents[i].price + "원"); 
    
        }
    
    
        });
    
    
        //분야별 추천- 유아/아동
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "동화" , sort: "accuracy" ,page:"35"},
            headers: {Authorization:" KakaoAK 673607ea05520afa978959ca1c6e8503"}
            })
        
            .done(function( msg ) {
            console.log(msg)
        
            var spin = $(".field_content > li ");
        
        
            for(var i=0; i< spin.length; i++){
        
            $("#main5_wrap4 > .field_box > .field_content > li").eq(i).find("img").attr("src",msg.documents[i].thumbnail);
            $("#main5_wrap4 > .field_box > .field_content > li").eq(i).find("h4").children("a").append(msg.documents[i].title);
            $("#main5_wrap4 > .field_box > .field_content > li").eq(i).find("span").append(msg.documents[i].price + "원"); 
        
            }
        
        
            });
    
    
            //분야별 추천- 학습/어학
            $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "어학" , sort: "accuracy",page:"2" },
                headers: {Authorization:" KakaoAK 673607ea05520afa978959ca1c6e8503"}
                })
            
                .done(function( msg ) {
                console.log(msg)
            
                var spin = $(".field_content > li ");
            
            
                for(var i=0; i< spin.length; i++){
            
                $("#main5_wrap5 > .field_box > .field_content > li").eq(i).find("img").attr("src",msg.documents[i].thumbnail);
                $("#main5_wrap5 > .field_box > .field_content > li").eq(i).find("h4").children("a").append(msg.documents[i].title);
                $("#main5_wrap5 > .field_box > .field_content > li").eq(i).find("span").append(msg.documents[i].price + "원"); 
            
                }
            
            
                });
    
    
    
                //분야별 추천- 외국도서
                $.ajax({
                    method: "GET",
                    url: "https://dapi.kakao.com/v3/search/book?target=title",
                    data: { query: "harry" , sort: "accuracy" ,page:"4"},
                    headers: {Authorization:" KakaoAK 673607ea05520afa978959ca1c6e8503"}
                    })
                
                    .done(function( msg ) {
                    console.log(msg)
                
                    var spin = $(".field_content > li ");
                
                
                    for(var i=0; i< spin.length; i++){
                
                    $("#main5_wrap6 > .field_box > .field_content > li").eq(i).find("img").attr("src",msg.documents[i].thumbnail);
                    $("#main5_wrap6 > .field_box > .field_content > li").eq(i).find("h4").children("a").append(msg.documents[i].title);
                    $("#main5_wrap6 > .field_box > .field_content > li").eq(i).find("span").append(msg.documents[i].price + "원"); 
                
                    }
                
                
                    });
});


