$(document).ready(function(){
    $('#flora').hide();
    $('#boxFlora').click(function(){
        $('#flora').show();
        $('html, body').animate({
            scrollTop: $("#flora").offset().top
        }, 2000);
    })

    $('#bungabangkai').hide();
    $('#boxBungabangkai').click(function(){
        $('#bungabangkai').show();
        $('html, body').animate({
            scrollTop: $("#flora").offset().top
        }, 2000);
    })

})