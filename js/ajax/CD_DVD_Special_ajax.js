//CD DVD Special   에이젝스

$(function(){


    //CD 상단 박스 데이터 가져오는 에이젝스
    $.ajax({
        url:"./json/CD_top.json",
        dataType:"json",
        success:function(data){

            if(data.length > 0){
                console.log(data)

                for(var i in data){
                    
                    $(".CD_img_box").eq(i).find("img:last").attr("src","img/main_img/main7/"+data[i].albumimg)
                    $(".CD_text_box").eq(i).children("p").text(data[i].title)
                    $(".CD_text_box").eq(i).children("span").children("del").text(data[i].del)
                    $(".CD_text_box").eq(i).children("span").children("h4").text(data[i].price)
                    $(".CD_text_box").eq(i).children("span").children("p").text(data[i].point)

                }
            }            
        }

    });


    //CD 하단 박스 데이터 가져오는 에이젝스
    $.ajax({
        url:"./json/CD_bottom.json",
        dataType:"json",
        success:function(data){

            if(data.length > 0){


                for(var i in data){
                    
                    $(".under_img_box").eq(i).find("img:last").attr("src","img/main_img/main7/"+ data[i].miniAlbum)
                    $(".under_text_box").eq(i).children("p").text(data[i].title)
                    

                }
            }            
        }

    });



    //DVD 상단 박스 데이터 가져오는 에이젝스
    $.ajax({
        url:"./json/DVD_top.json",
        dataType:"json",
        success:function(data){

            if(data.length > 0){

                for(var i in data){
                    
                    $(".DVD_img_box").eq(i).children("img").attr("src","img/main_img/main7/"+data[i].DVDimg)
                    $(".DVD_text_box").eq(i).children("p").text(data[i].title)
                    $(".DVD_text_box").eq(i).children("span").children("del").text(data[i].del)
                    $(".DVD_text_box").eq(i).children("span").children("h4").text(data[i].price)
                    $(".DVD_text_box").eq(i).children("span").children("p").text(data[i].point)

                }
            }            
        }

    });

    //DVD 하단 박스 데이터 가져오는 에이젝스
    $.ajax({
        url:"./json/DVD_bottom.json",
        dataType:"json",
        success:function(data){

            if(data.length > 0){

                for(var i in data){
                    
                    $(".under_img_box2").eq(i).children("img").attr("src","img/main_img/main7/"+ data[i].miniDVD)
                    $(".under_text_box2").eq(i).children("p").text(data[i].title)
                    

                }
            }            
        }

    });


    //special 데이터 가져오는 에이젝스
    $.ajax({
        url:"./json/Special.json",
        dataType:"json",
        success:function(data){

            if(data.length > 0){

                for(var i in data){
                    
                    $(".special_img_box").eq(i).children("img").attr("src","img/main_img/main7/"+data[i].bookImg)
                    $(".special_text_box").eq(i).children("h3").text(data[i].num)
                    $(".special_text_box").eq(i).children("p").text(data[i].title)
                    $(".special_text_box").eq(i).children("span").children("del").text(data[i].del)
                    $(".special_text_box").eq(i).children("span").children("h5").text(data[i].price)

                }
            }            
        }

    });





});

