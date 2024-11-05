(function ($){
    "use strict"
    //Spinner
    var spinner = function () {
        setTimeout(function(){
            if($('#spinner').length > 0 ){
                $('#spinner').removeClass('show');
            }
        },1)
    };
    spinner();
    //wow js
    new WOW().init();
    //navbar
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.sticky-top').addClass('shadow-sm').css('top','0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top','-100px');
        }
    });
    // fact
    $('[data-toggle="counter-up"]').counterUp({
        delay:10,
        time:2000
    })


})(jQuery);