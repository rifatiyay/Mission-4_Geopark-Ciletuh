
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
            scrollTop: $("bungabangkai").offset().top
        }, 2000);

        $('#pohonsantigi').hide();
        $('#padi').hide();
        $('#BMatahari').hide();
        $('#Mangrove').hide();
        
        $('#bantengjawa').hide();
        $('#burungjulang').hide();
        $('#babun').hide();
        $('#katak').hide();
        $('#ikantongkol').hide();

        $('#TebingPanenjoan').hide();
        $('#PantaiPalangpang').hide();
        $('#CurugSodong').hide();
        $('#PantaiCipanarikan').hide();
        $('#KasepuhanSinar').hide();
    })

    $('#pohonsantigi').hide();
    $('#boxPohonSantigi').click(function(){
        $('#pohonsantigi').show();
        $("html, body").animate({
            scrollTop: $("#pohonsantigi").offset().top
        }, 2000);

        $('#bungabangkai').hide();
        $('#padi').hide();
        $('#BMatahari').hide();
        $('#Mangrove').hide();
        
        $('#bantengjawa').hide();
        $('#burungjulang').hide();
        $('#babun').hide();
        $('#katak').hide();
        $('#ikantongkol').hide();

        $('#TebingPanenjoan').hide();
        $('#PantaiPalangpang').hide();
        $('#CurugSodong').hide();
        $('#PantaiCipanarikan').hide();
        $('#KasepuhanSinar').hide();
    })

    $('#padi').hide();
    $('#boxPadi').click(function(){
        $('#padi').show();
        $("html, body").animate({
            scrollTop: $("#padi").offset().top
        }, 2000);

        $('#bungabangkai').hide();
        $('#pohonsantigi').hide();
        $('#BMatahari').hide();
        $('#Mangrove').hide();
        
        $('#bantengjawa').hide();
        $('#burungjulang').hide();
        $('#babun').hide();
        $('#katak').hide();
        $('#ikantongkol').hide();

        $('#TebingPanenjoan').hide();
        $('#PantaiPalangpang').hide();
        $('#CurugSodong').hide();
        $('#PantaiCipanarikan').hide();
        $('#KasepuhanSinar').hide();
    })

    $('#BMatahari').hide();
    $('#boxBungaMatahari').click(function(){
        $('#BMatahari').show();
        $("html, body").animate({
            scrollTop: $("#BMatahari").offset().top
        }, 2000);

        $('#bungabangkai').hide();
        $('#pohonsantigi').hide();
        $('#padi').hide();
        $('#Mangrove').hide();
        
        $('#bantengjawa').hide();
        $('#burungjulang').hide();
        $('#babun').hide();
        $('#katak').hide();
        $('#ikantongkol').hide();

        $('#TebingPanenjoan').hide();
        $('#PantaiPalangpang').hide();
        $('#CurugSodong').hide();
        $('#PantaiCipanarikan').hide();
        $('#KasepuhanSinar').hide();
    })

    $('#Mangrove').hide();
    $('#boxMangrove').click(function(){
        $('#Mangrove').show();
        $("html, body").animate({
            scrollTop: $("#Mangrove").offset().top
        }, 2000);

        $('#bungabangkai').hide();
        $('#pohonsantigi').hide();
        $('#padi').hide();
        $('#BMatahari').hide();
        
        $('#bantengjawa').hide();
        $('#burungjulang').hide();
        $('#babun').hide();
        $('#katak').hide();
        $('#ikantongkol').hide();

        $('#TebingPanenjoan').hide();
        $('#PantaiPalangpang').hide();
        $('#CurugSodong').hide();
        $('#PantaiCipanarikan').hide();
        $('#KasepuhanSinar').hide();
    })


    // SECTION ISI FAUNA
    $('#bantengjawa').hide();
    $('#BoxBantengJawa').click(function(){
        $('#bantengjawa').show();
        $("html, body").animate({
            scrollTop: $("#bantengjawa").offset().top
        }, 2000);

        $('#bungabangkai').hide();
        $('#pohonsantigi').hide();
        $('#padi').hide();
        $('#BMatahari').hide();
        $('#Mangrove').hide();
        
        $('#burungjulang').hide();
        $('#babun').hide();
        $('#katak').hide();
        $('#ikantongkol').hide();

        $('#TebingPanenjoan').hide();
        $('#PantaiPalangpang').hide();
        $('#CurugSodong').hide();
        $('#PantaiCipanarikan').hide();
        $('#KasepuhanSinar').hide();
    })

    $('#burungjulang').hide();
    $('#BoxJulangEmas').click(function(){
        $('#burungjulang').show();
        $("html, body").animate({
            scrollTop: $("#burungjulang").offset().top
        }, 2000);

        $('#bungabangkai').hide();
        $('#pohonsantigi').hide();
        $('#padi').hide();
        $('#BMatahari').hide();
        $('#Mangrove').hide();

        $('#bantengjawa').hide();
        $('#babun').hide();
        $('#katak').hide();
        $('#ikantongkol').hide();

        $('#TebingPanenjoan').hide();
        $('#PantaiPalangpang').hide();
        $('#CurugSodong').hide();
        $('#PantaiCipanarikan').hide();
        $('#KasepuhanSinar').hide();
    })

    $('#babun').hide();
    $('#BoxBabun').click(function(){
        $('#babun').show();
        $("html, body").animate({
            scrollTop: $("#babun").offset().top
        }, 2000);

        $('#bungabangkai').hide();
        $('#pohonsantigi').hide();
        $('#padi').hide();
        $('#BMatahari').hide();
        $('#Mangrove').hide();
        
        $('#bantengjawa').hide();
        $('#burungjulang').hide();
        $('#katak').hide();
        $('#ikantongkol').hide();

        $('#TebingPanenjoan').hide();
        $('#PantaiPalangpang').hide();
        $('#CurugSodong').hide();
        $('#PantaiCipanarikan').hide();
        $('#KasepuhanSinar').hide();
    })

    $('#katak').hide();
    $('#BoxKatak').click(function(){
        $('#katak').show();
        $("html, body").animate({
            scrollTop: $("#katak").offset().top
        }, 2000);

        $('#bungabangkai').hide();
        $('#pohonsantigi').hide();
        $('#padi').hide();
        $('#BMatahari').hide();
        $('#Mangrove').hide();
        
        $('#bantengjawa').hide();
        $('#burungjulang').hide();
        $('#babun').hide();
        $('#ikantongkol').hide();

        $('#TebingPanenjoan').hide();
        $('#PantaiPalangpang').hide();
        $('#CurugSodong').hide();
        $('#PantaiCipanarikan').hide();
        $('#KasepuhanSinar').hide();
    })

    $('#ikantongkol').hide();
    $('#BoxTongkol').click(function(){
        $('#ikantongkol').show();
        $("html, body").animate({
            scrollTop: $("#ikantongkol").offset().top
        }, 2000);

        $('#bungabangkai').hide();
        $('#pohonsantigi').hide();
        $('#padi').hide();
        $('#BMatahari').hide();
        $('#Mangrove').hide();

        $('#bantengjawa').hide();
        $('#burungjulang').hide();
        $('#babun').hide();
        $('#katak').hide();

        $('#TebingPanenjoan').hide();
        $('#PantaiPalangpang').hide();
        $('#CurugSodong').hide();
        $('#PantaiCipanarikan').hide();
        $('#KasepuhanSinar').hide();
    })


    // SECTION ISI WISATA
    $('#TebingPanenjoan').hide();
    $('#BoxPanenjoan').click(function(){
        $('#TebingPanenjoan').show();
        $("html, body").animate({
            scrollTop: $("#TebingPanenjoan").offset().top
        }, 2000);

        $('#bungabangkai').hide();
        $('#pohonsantigi').hide();
        $('#padi').hide();
        $('#BMatahari').hide();
        $('#Mangrove').hide();

        $('#bantengjawa').hide();
        $('#burungjulang').hide();
        $('#babun').hide();
        $('#katak').hide();
        $('#ikantongkol').hide();

        $('#PantaiPalangpang').hide();
        $('#CurugSodong').hide();
        $('#PantaiCipanarikan').hide();
        $('#KasepuhanSinar').hide();

    })

    $('#PantaiPalangpang').hide();
    $('#BoxPalangpang').click(function(){
        $('#PantaiPalangpang').show();
        $("html, body").animate({
            scrollTop: $("#PantaiPalangpang").offset().top
        }, 2000);

        $('#bungabangkai').hide();
        $('#pohonsantigi').hide();
        $('#padi').hide();
        $('#BMatahari').hide();
        $('#Mangrove').hide();

        $('#bantengjawa').hide();
        $('#burungjulang').hide();
        $('#babun').hide();
        $('#katak').hide();
        $('#ikantongkol').hide();

        $('#TebingPanenjoan').hide();
        $('#CurugSodong').hide();
        $('#PantaiCipanarikan').hide();
        $('#KasepuhanSinar').hide();

    })

    $('#CurugSodong').hide();
    $('#BoxSodong').click(function(){
        $('#CurugSodong').show();
        $("html, body").animate({
            scrollTop: $("#CurugSodong").offset().top
        }, 2000);

        $('#bungabangkai').hide();
        $('#pohonsantigi').hide();
        $('#padi').hide();
        $('#BMatahari').hide();
        $('#Mangrove').hide();

        $('#bantengjawa').hide();
        $('#burungjulang').hide();
        $('#babun').hide();
        $('#katak').hide();
        $('#ikantongkol').hide();

        $('#TebingPanenjoan').hide();
        $('#PantaiPalangpang').hide();
        $('#PantaiCipanarikan').hide();
        $('#KasepuhanSinar').hide();
    })

    $('#PantaiCipanarikan').hide();
    $('#BoxCipanarikan').click(function(){
        $('#PantaiCipanarikan').show();
        $("html, body").animate({
            scrollTop: $("#PantaiCipanarikan").offset().top
        }, 2000);

        $('#bungabangkai').hide();
        $('#pohonsantigi').hide();
        $('#padi').hide();
        $('#BMatahari').hide();
        $('#Mangrove').hide();

        $('#bantengjawa').hide();
        $('#burungjulang').hide();
        $('#babun').hide();
        $('#katak').hide();
        $('#ikantongkol').hide();

        $('#TebingPanenjoan').hide();
        $('#PantaiPalangpang').hide();
        $('#CurugSodong').hide();
        $('#KasepuhanSinar').hide();
    })

    $('#KasepuhanSinar').hide();
    $('#BoxKasepuhan').click(function(){
        $('#KasepuhanSinar').show();
        $("html, body").animate({
            scrollTop: $("#KasepuhanSinar").offset().top
        }, 2000);

        $('#bungabangkai').hide();
        $('#pohonsantigi').hide();
        $('#padi').hide();
        $('#BMatahari').hide();
        $('#Mangrove').hide();

        $('#bantengjawa').hide();
        $('#burungjulang').hide();
        $('#babun').hide();
        $('#katak').hide();
        $('#ikantongkol').hide();

        $('#TebingPanenjoan').hide();
        $('#PantaiPalangpang').hide();
        $('#CurugSodong').hide();
        $('#PantaiCipanarikan').hide();
    })

})