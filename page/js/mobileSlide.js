$(function(){
    function mobile1(){
        $(".mobile > .mobile_box > ul").stop().animate({marginTop:-510},function(){
        $(".mobile > .mobile_box > ul > li:first").appendTo(".mobile > .mobile_box > ul")
        $(".mobile > .mobile_box > ul").css({marginTop:0})
        })
    }
    setInterval(mobile1,3000);

    function mobile2(){
        $(".gamemobile > .gamemobile_box > ul").stop().animate({marginTop:-510},function(){
        $(".gamemobile > .gamemobile_box > ul > li:first").appendTo(".gamemobile > .gamemobile_box > ul")
        $(".gamemobile > .gamemobile_box > ul").css({marginTop:0})
        })
    }
    setInterval(mobile2,3000);
})