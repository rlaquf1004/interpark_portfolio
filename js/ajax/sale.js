
$(function(){


/* 특가할인 */
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"뽀로로북" , page:"62"},
    headers:{Authorization: "KakaoAK 673607ea05520afa978959ca1c6e8503"}
  })
  .done(function( msg ) {
  
    console.log( msg.documents[1].title );
    console.log( msg.documents[1].thumbnail );
  
  
  
    var divs = document.getElementsByTagName('div');
  
    for(var i=0; i<divs.length; i++){
  
        $(".M6_book_imgbox1").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
        $(".M6_book_text_box1").eq(i).append("<h4>" + msg.documents[i].title + "</h4>" + "<p>정가 " + msg.documents[i].price + "원" + "</p>" + "<h5>"+msg.documents[i].sale_price + "원" + "</h5>");
      
      
  
    }
  
  });




  /* 정가인하 */
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"티니핑북"  },
    headers:{Authorization: "KakaoAK 673607ea05520afa978959ca1c6e8503"}
  })
  .done(function( msg ) {
  
    console.log( msg.documents[1].title );
    console.log( msg.documents[1].thumbnail );
  
  
  
    var divs = document.getElementsByTagName('div');
  
    for(var i=0; i < divs.length; i++){
  
        $(".M6_book_imgbox2").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
        $(".M6_book_text_box2").eq(i).append("<h4>" + msg.documents[i].title + "</h4>" + "<p>정가 " + msg.documents[i].price + "원" + "</p>" + "<h5>"+msg.documents[i].sale_price + "원" + "</h5>");
      
      
  
    }
  
  });





})