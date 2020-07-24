new WOW().init();


(function($) {
    $(document).ready(function(){
        $('#one').owlCarousel({
            loop:true,
            margin:10,
            autoplay: 3000,
            items:3,
            responsive:{
                0:{
                    items:1
                },
                768:{
                    items:2
                },
                1023:{
                    items:2
                },
                1250:{
                    items:3
                }
            }
        })
    });
}) (jQuery);

(function($) {
    $(document).ready(function(){
        $('#two').owlCarousel({
            loop:true,
            margin:40,
            autoplay: 2000,
            items:4,
            responsive:{
                0:{
                    items:1
                },
                375:{
                    items:2
                },
                768:{
                    items:3
                },
                1023:{
                    items:4
                },
                1250:{
                    items:4
                }
            }
        })
    });
}) (jQuery);


let swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 0,
    slidesPerGroup: 1,
     loopFillGroupWithBlank: true,
     loop: true,
     autoplay: {
         delay: 5000,
     },
     pagination: {
         el: '.swiper-pagination',
         clickable: true,
     }
});


$(function(){

        /* zoom */
        $('.zoom_01').elevateZoom({
            responsive : true,
            zoomType                : "lens",
            lensShape : "round",
            lensSize    : 300
        });
        /*******************/


        let close_win = false;
        /* nav hover */
        $(".nav-item").mouseover(function(){
            $(".nav-item").removeClass("active");
            $(this).addClass("active");
        })

        /* toggler */
        $("button.navbar-toggler").click(function(){
            if($(this).hasClass("change")){
                $(this).removeClass("change");
                $(".navbar-brand").css({marginLeft:"0",transform:"translateX(0px)"})
            } else {
                $(this).addClass("change");
                $(".navbar-brand").css({margin:"auto",transform:"translateX(35px)"})
            }
        })


        /* active effect */
        $(".sxema").click(function(){
            let homeTop = $("#sxema").offset().top;
            $("body, html").animate({scrollTop: homeTop}, 900)
        })
        $(".otziv").click(function(){
            let homeTop = $("#otziv").offset().top;
            $("body, html").animate({scrollTop: homeTop}, 900)
        })
        $(".tarif").click(function(){
            let homeTop = $("#tarif").offset().top;
            $("body, html").animate({scrollTop: homeTop}, 900)
        })

        let home = $(".home")
        let homesTop = $("#home").offset().top;
        $(".homee").click(function(){
            $("body, html").animate({scrollTop: homesTop}, 900)
        })
        let portfolion = $(".portfo");
        let portfolionTop = $("#portfo").offset().top;
        $(".portfo").click(function(){
            $("body, html").animate({scrollTop: portfolionTop}, 900)
        })
        let uslugi = $(".uslugi");
        let uslugiTop = $("#uslugi").offset().top;
        $(".uslugi").click(function(){
            $("body, html").animate({scrollTop: uslugiTop}, 900)
        })
        let contact = $(".kontakt");
        let contactTop = $("#kontakt").offset().top;
        $(".kontakt").click(function(){
            $("body, html").animate({scrollTop: contactTop}, 900)
        })

        let active_scroll = [home, uslugi, portfolion, contact];
        let active_scroll_off = [homesTop, uslugiTop, portfolionTop, contactTop];


        /* scroll effects */
        let let_go = true;
        let let_go1 = true;
        let let_go2 = true;
        let let_go3 = true;
        let let_go4 = true;
        let let_go5 = true;
        let let_go6 = true;
        let let_go7 = true;
        let let_go8 = true;
        let let_go9 = true;
        let let_go10 = true;
        $(window).scroll(function(){
            // fixed navbar
            if($(this).scrollTop() > 47){
                $(".navbar").addClass("fixed-top");

                $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
            }else{
                $(".navbar").removeClass("fixed-top")

                $('body').css('padding-top', '0');
            }


            if($(window).scrollTop() >= $(".stick.sc1").offset().top - $(window).height() && let_go){
                let_go = false;
                $(".sc1").animate({width:"105px"},3000, function(){$(this).css({minWidth:"105px"});});
                $(".st2").animate({width:"425px"},3000);
            }
            if($(window).scrollTop() >= $(".stick.sc2").offset().top - $(window).height() && let_go1){
                let_go1 = false;
                $(".stick.st3.sc2").animate({width:"105px"},2500, function(){$(".stick.st3.sc2").css({minWidth:"105px"});});
            }
            if($(window).scrollTop() >= $(".stick.sc3").offset().top - $(window).height() && let_go2){
                let_go2 = false;
                $(".sc3").animate({width:"105px"},2500, function(){$(".sc3").css({minWidth:"105px"});});
            }
            if($(window).scrollTop() >= $(".stick.sc4").offset().top - $(window).height() && let_go3){
                let_go3 = false;
                $(".sc4").animate({width:"105px"},2500, function(){$(".sc4").css({minWidth:"105px"});});
            }
            if($(window).scrollTop() >= $(".stick.sc5").offset().top - $(window).height() && let_go4){
                let_go4 = false;
                $(".sc5").animate({width:"105px"},2500, function(){$(".sc5").css({minWidth:"105px"});});
            }
            if($(window).scrollTop() >= $(".stick.sc6").offset().top - $(window).height() && let_go5){
                let_go5 = false;
                $(".sc6").animate({width:"105px"},2500, function(){$(".sc6").css({minWidth:"105px"});});
            }
            if($(window).scrollTop() >= $(".stick.sc7").offset().top - $(window).height() && let_go6){
                let_go6 = false;
                $(".sc7").animate({width:"105px"},2500, function(){$(".sc7").css({minWidth:"105px"});});
            }
            if($(window).scrollTop() >= $(".stick.sc8").offset().top - $(window).height() && let_go7){
                let_go7 = false;
                $(".sc8").animate({width:"105px"},2500, function(){$(".sc8").css({minWidth:"105px"});});
            }
            if($(window).scrollTop() >= $(".stick.sc9").offset().top - $(window).height() && let_go8){
                let_go8 = false;
                $(".sc9").animate({width:"105px"},2500, function(){$(".sc9").css({minWidth:"105px"});});
            }
            if($(window).scrollTop() >= $(".stick.sc10").offset().top - $(window).height() && let_go9){
                let_go9 = false;
                $(".sc10").animate({width:"105px"},2500, function(){$(".sc10").css({minWidth:"105px"});});
            }
            if($(window).scrollTop() >= $(".stick.sc11").offset().top - $(window).height() && let_go10){
                let_go10 = false;
                $(".sc11").animate({width:"105px"},2500, function(){$(".sc11").css({minWidth:"105px"});});
            }


            // navbar active 
            for(i=0;i<active_scroll.length;i++){
                if($(window).scrollTop() >= active_scroll_off[i]){
                    $("li.nav-item.scroll_act").removeClass("active");
                    $("li.nav-item.scroll_act").eq(i).addClass("active");
                }
            }
        })

        // show more block
        let hid_block1 = $(".hide_block").slideUp().detach();
        let block_tog=1;
        
            $(".des_but1 button").click(function(){ 
                if(block_tog%2!=0){
                    $(this).parent().parent().before(hid_block1);
                    hid_block1.slideDown(500);
                    block_tog++;
                    } else if(block_tog%2==0) {
                    $(".hide_block").slideUp(function(){$(".hide_block").detach()});
                    block_tog++;
                }
            })

        let hid_block2 = $(".hide_block2").slideUp().detach();
        let block_tog2 = 1;
        
            $(".des_but2 button").click(function(){
                if(block_tog2%2!=0){
                    $(this).parent().parent().before(hid_block2);
                    hid_block2.slideDown(500);
                    block_tog2++;
                } else if(block_tog2%2==0) {
                    $(".hide_block2").slideUp(function(){$(".hide_block2").detach()});
                    block_tog2++;
                }
            })

        let hid_block3 = $(".hide_block3").slideUp().detach();
        let block_tog3 = 1;
        
            $(".des_but3 button").click(function(){
                if(block_tog3%2!=0){
                    $(this).parent().parent().before(hid_block3);
                    hid_block3.slideDown(500);
                    block_tog3++;
                } else if(block_tog3%2==0) {
                    $(".hide_block3").slideUp(function(){$(".hide_block3").detach()});
                    block_tog3++;
                }
            })
        /******************************************************/
        
        
        // portfolio
        let port;
        let port_title;
        let port1 = $("#port1").detach();
        
        $(".port01").on("click",function(){
            port_title = $(this).children().text();
            port = $("#port").detach();
            $(".portfolios").append(port1);
            $(".prev_but1").css({display:"block"});
        })


        $(document).on( 'click', ".prev_but1", function(){
            $("#port1").detach();
            $(".portfolios").append(port);
            $(".prev_but1").css({display:"none"});
        })
        
        $(document).on( 'click', "#port1 .port_flex" , function(){
            $(this).children(".cret_abs").show(250).css({visibility:"visible"});
            $(".call_ring_window_bg").css({display:"block"});
            $("body").css({overflow:"hidden"});
            close_win = true;
        })

        let website_name;
        let website_link;
        $(document).on( 'click', ".cret_abs > div > img" ,function(){
            let website_name = $(this).prev(".zoom").children("img").attr("alt");
            let website_link = $(this).prev(".zoom").children("img").attr("title");
            $("h1.cret_title").text(website_name).css({textDecoration:"underline"});
            $(".cret_link").attr("href", website_link).attr("target","_blank");
            $(this).prev(".zoom").show(250);
            $(this).parent().parent().css({height:"100%"})
            return false;
        })

        $(document).on( 'click', ".zoom" ,function(){
            $(".zoom").hide(250);
            $(".cret_title").text(port_title).css({textDecoration:"none"});
            $(".cret_link").removeAttr("href").removeAttr("target");
            $(".cret_abs").css({height:"auto"})
        })


        // UI/UX
        let port2 = $("#port2").detach();

        $(".port02").on("click",function(){
            port = $("#port").detach();
            $(".portfolios").append(port2);
            $(".prev_but2").css({display:"block"});
            hov_name();
        })


        $(document).on( 'click', ".port_blocks .port_flex .port_img .one_time" , function(){
            website_name = $(this).prev().prev(".uiux").children(".zoom2").children().attr("alt");
            website_link = $(this).prev().prev(".uiux").children(".zoom2").children().attr("title");
            $(this).prev().prev(".uiux").show(250).css({visibility:"visible"});;
            $(".cret_title").text(website_name).css({textDecoration:"underline"});
            $(".cret_link").attr("href", website_link).attr("target","_blank");

            $(".call_ring_window_bg").css({display:"block"});
            $("body").css({overflow:"hidden"});
            close_win = true;
        })

        $(document).on( 'click', ".zoom2" ,function(){
            $(this).parent().hide(250);
            $(this).prev(".cret_link").removeAttr("href").removeAttr("target");
            $(".call_ring_window_bg").css({display:"none"});
            $("body").css({overflow:"auto"});
        })


        $(document).on( 'click', ".close" ,function(){
            $(this).parent().hide(500);
            $(".zoom").hide();
            for(i=0;i<$(".cret_abs").length;i++){
               $(".cret_abs").eq(i).css({height:"auto !important"}); 
            }
            $(".cret_title").text(port_title).css({textDecoration:"none"});
            $(".cret_link").removeAttr("href").removeAttr("target");
            $(".call_ring_window_bg").css({display:"none"});
            $("body").css({overflow:"auto"});
            close_win = false;
            return false;
        })

        $(document).on( 'click', ".prev_but2", function(){
            port2 = $("#port2").detach();
            $(".portfolios").append(port);
            $(".prev_but2").css({display:"none"});
        })

        
        /* portfolio hover */
        function hov_name(){
            for(i=0;i<$(".port_blocks .port_flex .port_img").length;i++){
                hoveres = "<div class='one_time'><p class='hov_src'></p></div>";
                $(".port_blocks .port_flex .port_img").eq(i).append(hoveres);
                let nim = $(".hov_src").eq(i).parent().prev().prev(".uiux").children(".zoom2").children().attr("alt");
                $(".hov_src").eq(i).text(nim);
            }
        }
        /*************************/


        /* SEO */
        let port3 = $("#port3").detach();

        $(".port03").on("click",function(){
            port = $("#port").detach();
            $(".portfolios").append(port3);
            $(".prev_but3").css({display:"block"});
            hov_name();
        })

        $(document).on( 'click', ".prev_but3", function(){
            port3 = $("#port3").detach();
            $(".portfolios").append(port);
            $(".prev_but3").css({display:"none"});
        })


        /* SMM */
        let port4 = $("#port4").detach();

        $(".port04").on("click",function(){
            port = $("#port").detach();
            $(".portfolios").append(port4);
            $(".prev_but4").css({display:"block"});
            hov_name();
        })

        $(document).on( 'click', ".prev_but4", function(){
            port4 = $("#port4").detach();
            $(".portfolios").append(port);
            $(".prev_but4").css({display:"none"});
        });

    /* CRM */

             
    let port8= $("#port8").detach();

    $(".port08").on("click",function(){
        port = $("#port").detach();
        $(".portfolios").append(port8);
        $(".prev_but8").css({display:"block"});
        hov_name();
    });

    $(document).on( 'click', ".port_blockss .port_flex .port_img .one_time" , function(){
        website_name = $(this).prev().prev(".uiux").children(".zoom2").children().attr("alt");
        website_link = $(this).prev().prev(".uiux").children(".zoom2").children().attr("title");
        $(this).prev().prev(".uiux").show(250).css({visibility:"visible"});;
        $(".cret_title").text(website_name).css({textDecoration:"underline"});
        $(".cret_link").attr("href", website_link).attr("target","_blank");

        $(".call_ring_window_bg").css({display:"block"});
        $("body").css({overflow:"hidden"});
        close_win = true;
    })

    $(document).on( 'click', ".zoom2" ,function(){
        $(this).parent().hide(250);
        $(this).prev(".cret_link").removeAttr("href").removeAttr("target");
        $(".call_ring_window_bg").css({display:"none"});
        $("body").css({overflow:"auto"});
    })


    $(document).on( 'click', ".close" ,function(){
        $(this).parent().hide(500);
        $(".zoom").hide();
        for(i=0;i<$(".cret_abs").length;i++){
           $(".cret_abs").eq(i).css({height:"auto !important"}); 
        }
        $(".cret_title").text(port_title).css({textDecoration:"none"});
        $(".cret_link").removeAttr("href").removeAttr("target");
        $(".call_ring_window_bg").css({display:"none"});
        $("body").css({overflow:"auto"});
        close_win = false;
        return false;
    });

    $(document).on( 'click', ".prev_but8", function(){
        port8 = $("#port8").detach();
        $(".portfolios").append(port);
        $(".prev_but8").css({display:"none"});
    });




    ////////

          /* BANNER */

        let port7= $("#port7").detach();

        $(".port07").on("click",function(){
            port = $("#port").detach();
            $(".portfolios").append(port7);
            $(".prev_but7").css({display:"block"});
            hov_name();
        });

        $(document).on( 'click', ".port_blocks .port_flex .port_img .one_time" , function(){
            website_name = $(this).prev().prev(".uiux").children(".zoom2").children().attr("alt");
            website_link = $(this).prev().prev(".uiux").children(".zoom2").children().attr("title");
            $(this).prev().prev(".uiux").show(250).css({visibility:"visible"});;
            $(".cret_title").text(website_name).css({textDecoration:"underline"});
            $(".cret_link").attr("href", website_link).attr("target","_blank");

            $(".call_ring_window_bg").css({display:"block"});
            $("body").css({overflow:"hidden"});
            close_win = true;
        })

        $(document).on( 'click', ".zoom2" ,function(){
            $(this).parent().hide(250);
            $(this).prev(".cret_link").removeAttr("href").removeAttr("target");
            $(".call_ring_window_bg").css({display:"none"});
            $("body").css({overflow:"auto"});
        })


        $(document).on( 'click', ".close" ,function(){
            $(this).parent().hide(500);
            $(".zoom").hide();
            for(i=0;i<$(".cret_abs").length;i++){
               $(".cret_abs").eq(i).css({height:"auto !important"}); 
            }
            $(".cret_title").text(port_title).css({textDecoration:"none"});
            $(".cret_link").removeAttr("href").removeAttr("target");
            $(".call_ring_window_bg").css({display:"none"});
            $("body").css({overflow:"auto"});
            close_win = false;
            return false;
        })

        $(document).on( 'click', ".prev_but7", function(){
            port7 = $("#port7").detach();
            $(".portfolios").append(port);
            $(".prev_but7").css({display:"none"});
        });


        ////////

      

        /* KONTECST */
        
        let port5= $("#port5").detach();

        $(".port05").on("click",function(){
            port = $("#port").detach();
            $(".portfolios").append(port5);
            $(".prev_but5").css({display:"block"});
            hov_name();
        });

        $(document).on( 'click', ".port_blockss .port_flex .port_img .one_time" , function(){
            website_name = $(this).prev().prev(".uiux").children(".zoom2").children().attr("alt");
            website_link = $(this).prev().prev(".uiux").children(".zoom2").children().attr("title");
            $(this).prev().prev(".uiux").show(250).css({visibility:"visible"});;
            $(".cret_title").text(website_name).css({textDecoration:"underline"});
            $(".cret_link").attr("href", website_link).attr("target","_blank");

            $(".call_ring_window_bg").css({display:"block"});
            $("body").css({overflow:"hidden"});
            close_win = true;
        })

        $(document).on( 'click', ".zoom2" ,function(){
            $(this).parent().hide(250);
            $(this).prev(".cret_link").removeAttr("href").removeAttr("target");
            $(".call_ring_window_bg").css({display:"none"});
            $("body").css({overflow:"auto"});
        })


        $(document).on( 'click', ".close" ,function(){
            $(this).parent().hide(500);
            $(".zoom").hide();
            for(i=0;i<$(".cret_abs").length;i++){
               $(".cret_abs").eq(i).css({height:"auto !important"}); 
            }
            $(".cret_title").text(port_title).css({textDecoration:"none"});
            $(".cret_link").removeAttr("href").removeAttr("target");
            $(".call_ring_window_bg").css({display:"none"});
            $("body").css({overflow:"auto"});
            close_win = false;
            return false;
        });

        $(document).on( 'click', ".prev_but5", function(){
            port5 = $("#port5").detach();
            $(".portfolios").append(port);
            $(".prev_but5").css({display:"none"});
        });



        /* LOGO */
        let port6 = $("#port6").detach();

        $(".port06").on("click",function(){
            port = $("#port").detach();
            $(".portfolios").append(port6);
            $(".prev_but6").css({display:"block"});
        })

        $(document).on( 'click', ".prev_but6", function(){
            port6 = $("#port6").detach();
            $(".portfolios").append(port);
            $(".prev_but6").css({display:"none"});
        })

        $(document).on( 'click', ".port_blocks .port_flex .port_img img" , function(){
            $(this).prev(".uiux").show(250).css({visibility:"visible"});
            $(".call_ring_window_bg").css({display:"block"});
            $("body").css({overflow:"hidden"});
            close_win = true;
        })

        $(document).on( 'click', ".port_blocks .port_flex" , function(){
            website_name = $(this).children(".port_img").children(".uiux").children(".zoom2").children().attr("alt");
            website_link = $(this).children(".port_img").children(".uiux").children(".zoom2").children().attr("title");
            $(this).children(".port_img").children(".uiux").show(250).css({visibility:"visible"});;
            $(".cret_title").text(website_name).css({textDecoration:"underline"});
            $(".cret_link").attr("href", website_link).attr("target","_blank");

            $(".call_ring_window_bg").css({display:"block"});
            $("body").css({overflow:"hidden"});
            close_win = true;
            return false;
        })

        $(document).on( 'click', ".zoom2" ,function(){
            $(this).parent(".uiux").hide(250);
            $(this).prev(".cret_link").removeAttr("href").removeAttr("target");
            $(".call_ring_window_bg").css({display:"none"});
            $("body").css({overflow:"auto"});
            return false;
        })

      
        /* VIDEO */
        let port10 = $("#port10").detach();

        $(document).on("click", ".port10", function(){
            port = $("#port").detach();
            $(".portfolios").append(port10);
            $(".prev_but10").css({display:"block"});
            $("body, html").animate({scrollTop: portfolionTop}, 300)
        })

        $(document).on( 'click', ".prev_but10", function(){
            port10 = $("#port10").detach();
            $(".portfolios").append(port);
            $(".prev_but10").css({display:"none"});
        })



        /* map */
        $(".map_close").click(function(){
            $(".map_desc").css({display:"none"})
            $(".map_address").css({display:"block"})
        })

        $(".map_address").click(function(){
            $(".map_desc").slideDown(500);
        })
        /******************************/

        
        $(".call_ring").click(function(){
            $(".call_ring_window").slideDown(200);
            $(".call_ring_window_bg").css({display:"block"});
            close_win = true; 
        })

        $(".call_ring_window_bg").click(function(){
            if(close_win){
                $(".call_ring_window").slideUp(200);
                $(".cret_abs").hide();
                $(".zoom").hide();
                $(".uiux").hide(250);
                $(".call_ring_window_bg").css({display:"none"});
                $("body").css({overflow:"auto"});
                close_win = false;
            }
        })


        /* read more */
        $("#read_more").click(function(){
            if($(this).text()!="READ LESS"){
                $(".more").css({visibility:"hidden"});
                $(".more_txt").css({display:"inline-block"});
                $(this).text("READ LESS");
            } else {
                $(".more").css({visibility:"visible"});
                $(".more_txt").css({display:"none"});
                $(this).text("READ MORE");
            }           
        })
        $("#read_more2").click(function(){
            if($(this).text()!="READ LESS"){
                $(".more2").css({visibility:"hidden"});
                $(".more_txt2").css({display:"inline-block"});
                $(this).text("READ LESS");
            } else {
                $(".more2").css({visibility:"visible"});
                $(".more_txt2").css({display:"none"});
                $(this).text("READ MORE");
            }           
        })
        $(".read_more3").click(function(){
            if($(this).text()!="READ LESS"){
                $(".more3").css({display:"none"});
                $(".more_txt3").css({display:"block"});
                $(this).text("READ LESS");
            } else {
                $(".more3").css({display:"block"});
                $(".more_txt3").css({display:"none"});
                $(this).text("READ MORE");
            }           
        }) 
})



