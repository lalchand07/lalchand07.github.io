$(document).ready(function() {
    // alert($(document).width());
    // alert($(document).height());

    var $headerH = $('.navbar').innerHeight();
    $(".st-content").scroll(function(){
        var div_offset = $(this).scrollTop();
        $("header").css('top', div_offset+'px');
    });

    /* navbar scroll start*/
    var selector = $(".st-content");
    var slider_height = $(".slider").height();
        if(selector.scrollTop()>=slider_height){
            $('.navbar').addClass('my-nav');
        }else{
            $('.navbar').removeClass('my-nav');
        }
    $(selector).scroll(function() {
        var slider_height = $(".slider").height();
        if(selector.scrollTop()>=slider_height){
            $('.navbar').addClass('my-nav');
        }else{
            $('.navbar').removeClass('my-nav');
        }
    });
    /* navbar scroll end*/

    //close navbar js Start
    $("#close-st-menu").click(function(){
        $(this).parents(".st-container").removeClass('st-menu-open');
    });
    //close navbar js End

    /* Reveal scroll triggers Start */
    window.sr = ScrollReveal({ reset: true });
    sr.reveal('.branding-tube', { container: '.st-content', duration: 2100 }, 2000);
    sr.reveal('.branding-mobile', { container: '.st-content', duration: 2100 }, 2000);
    sr.reveal('.branding-card', { container: '.st-content', duration: 2100 }, 2000);
    sr.reveal('.branding-cup', { container: '.st-content', duration: 2100 }, 2000);
    sr.reveal('.branding-letter', { container: '.st-content', duration: 2100 }, 2000);
    sr.reveal('.globe-circle', { container: '.st-content', duration: 2100 }, 1000);
    sr.reveal('.globe-bubbles', { container: '.st-content', duration: 2100 }, 3000);

    $('.parallax-text').each(function(index, el) {
        sr.reveal('#'+$(this).attr('id'), { container: '.st-content', duration: 2100 }, 2000);
    });
    $('.section-content').each(function(index, el) {
        sr.reveal('#'+$(this).attr('id'), { container: '.st-content', duration: 2100 }, 2000);
    });
    /* Reveal scroll triggers End */

    $('#nav-effect-trigger').click(function(){
        //alert('hello');
        $('.nav-effect li a').addClass('fadIn animated');
    });

    //wow js Start
    wow = new WOW(
        {
            animateClass: 'animated',
            offset:       100,
            scrollContainer: '.st-content'
        }
    );
    wow.init();
    //wow js End

    // SVG images start

    //Redo XML
    jQuery('img.svg').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');
    });
    // SVG images end

    //match height js Start
    if ($(".content-height").length > 0) 
    {
        $(".content-height").matchHeight();
    }
    //match height js End

    //validation js Start
    if ($("#work-form").length > 0) 
    {
        $("#work-form").validate();
    }
    if ($("#contact-form").length > 0) 
    {
        $("#contact-form").validate();
    }
    //validation js End

});

/*$('.st-content').on('scroll', function(){

    //alert('hello');
      var window_offset = $('.st-content').scrollTop();
  $(".globe-bubbles").css({
    'transition-duration' : '1s',
    'transition-timing-function' : 'ease',
    'transform' : 'translate3d(0px, -'+window_offset+'px, 200px)',

  });

});*/

var card = $(".card");


