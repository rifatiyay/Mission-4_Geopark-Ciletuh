
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
    $('#bantengjawa').hide();
    $('#BoxBantengJawa').click(function(){
        $('#bantengjawa').show();
        // $("html, body").animate({
        //     scrollTop: $("#flora").offset().top
        // }, 2000);

        $('#burungjulang').hide();
        $('#babun').hide();
        $('#katak').hide();
        $('#ikantongkol').hide();
    })

    $('#burungjulang').hide();
    $('#BoxJulangEmas').click(function(){
        $('#burungjulang').show();
        // $("html, body").animate({
        //     scrollTop: $("#flora").offset().top
        // }, 2000);

        $('#bantengjawa').hide();
        $('#babun').hide();
        $('#katak').hide();
        $('#ikantongkol').hide();
    })

    $('#babun').hide();
    $('#BoxBabun').click(function(){
        $('#babun').show();
        // $("html, body").animate({
        //     scrollTop: $("#flora").offset().top
        // }, 2000);

        $('#bantengjawa').hide();
        $('#burungjulang').hide();
        $('#katak').hide();
        $('#ikantongkol').hide();
    })

    $('#katak').hide();
    $('#BoxKatak').click(function(){
        $('#katak').show();
        // $("html, body").animate({
        //     scrollTop: $("#flora").offset().top
        // }, 2000);

        $('#bantengjawa').hide();
        $('#burungjulang').hide();
        $('#babun').hide();
        $('#ikantongkol').hide();
    })

    $('#ikantongkol').hide();
    $('#BoxTongkol').click(function(){
        $('#ikantongkol').show();
        // $("html, body").animate({
        //     scrollTop: $("#flora").offset().top
        // }, 2000);

        $('#bantengjawa').hide();
        $('#burungjulang').hide();
        $('#babun').hide();
        $('#katak').hide();
    })


    // SECTION ISI WISATA

})