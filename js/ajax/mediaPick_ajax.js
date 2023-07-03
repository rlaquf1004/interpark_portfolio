//미디어 추천, 이 책 어때?  에이젝스

$(function(){
    
    //미디어 추천
    $.ajax({

        url:"./json/mediaPick.json",
        dataType:"json",
        success:function(data){

            if(data.length > 0){

                for(var i in data){

                    $(".media_wrap > ul > li").eq(i).find("img").attr("src","img/main_img/main3/"+ data[i].bookCover)

                }

            }
        }
    });




    //이 책 어때? 에이젝스
    $.ajax({

        url:"./json/thisBook.json",
        dataType:"json",
        success:function(data){

            if(data.length > 0){

                for(var i in data){

                    $(".thisBook > li").eq(i).children("img").attr("src","img/main_img/main3/"+ data[i].bookCover)

                }

            }
        }
    });
    


});