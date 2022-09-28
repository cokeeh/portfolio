$(function(){
    //교보문고
    $("#koybobox").mouseenter(function(){
        $("#koybo > li").stop().animate({marginTop:"-2150px"},8000)
    }).mouseleave(function(){
        $("#koybo > li").stop().animate({marginTop:"0px"},3000)
    })
    
    //휠라
    $("#filabox").mouseenter(function(){
        $("#fila > li").stop().animate({marginTop:"-1750px"},8000)
    }).mouseleave(function(){
        $("#fila > li").stop().animate({marginTop:"0px"},3000)
    })
    
    //게임
    $("#gamebox").mouseenter(function(){
        $("#game > li").stop().animate({marginTop:"-2000px"},8000)
    }).mouseleave(function(){
        $("#game > li").stop().animate({marginTop:"0px"},3000)
    })
    
    //마켓컬리
    $("#mkbox").mouseenter(function(){
        $("#mk > li").stop().animate({marginTop:"-1510px"},8000)
    }).mouseleave(function(){
        $("#mk > li").stop().animate({marginTop:"0px"},3000)
    })
})