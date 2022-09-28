
$(document).ready(function(){
    //SECTION ISI ARTIKEL
    $('#flora').hide();
    $('#boxFlora').click(function(){
        $('#flora').show();
        $('html, body').animate({
            scrollTop: $("#flora").offset().top
        }, 2000);
    })

    $('#fauna').hide();
    $('#boxFauna').click(function(){
        $('#fauna').show();
        $('html, body').animate({
            scrollTop: $("#fauna").offset().top
        }, 2000);
    })

    $('#wisata').hide();
    $('#boxWisata').click(function(){
        $('#wisata').show();
        $('html, body').animate({
            scrollTop: $("#wisata").offset().top
        }, 2000);
    })


    // SECTION ISI FLORA
    $('#bungabangkai').hide();
    $('#boxBungabangkai').click(function(){
        $('#bungabangkai').show();
        $("html, body").animate({
            scrollTop: $("#flora").offset().top
        }, 2000);
    })

    // SECTION ISI FAUNA
    



    // SECTION ISI WISATA

})