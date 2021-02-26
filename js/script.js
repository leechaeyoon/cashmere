$(document).ready(function(){
    //문서가 준비가 완료되면 함수문의 내부 실행문을 실행해라

    $(".menu li:nth-child(1)").click(function(){ //메뉴 대상물을 클릭했을 때
        $("html, body").animate({scrollTop:$("#cont_01 article:nth-child(1)").offset().top},1000);
        //문서를 움직인다. animate({스크롤바의 상잔 위치: 타켓 대상물의 상단 절대위치}.이동시간)
        return false;

    });
    $(".menu li:nth-child(2)").click(function(){
        $("html, body").animate({scrollTop:$("#cont_01 article:nth-child(2)").offset().top},1000);
        return false;

    });
    $(".menu li:nth-child(3)").click(function(){
        $("html, body").animate({scrollTop:$("#tc_cont3 article:nth-child(1)").offset().top},1000);
        return false;

    });
    $(".menu li:nth-child(4)").click(function(){
        $("html, body").animate({scrollTop:$("#tc_cont3 article:nth-child(2)").offset().top},1000);
        return false;

    });

})