
$(document).ready(function(){
    //SECTION ISI ARTIKEL
    $('#flora').hide();
    $('#boxFlora').click(function(){
        $('#fauna').hide();
        $('#wisata').hide();
        $('#flora').show();
        $('html, body').animate({
            scrollTop: $("#flora").offset().top
        }, 2000);
    })

    $('#fauna').hide();
    $('#boxFauna').click(function(){
        $('#flora').hide();
        $('#wisata').hide();
        $('#fauna').show();
        $('html, body').animate({
            scrollTop: $("#fauna").offset().top
        }, 2000);
    })

    $('#wisata').hide();
    $('#boxWisata').click(function(){
        $('#flora').hide();
        $('#fauna').hide();
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