$( document ).ready(function() {
    if ($('.speed1').length > 0) {
        var speed = 110000;
    }

    if ($('.speed2').length > 0) {
        var speed = 90000;
    }
    
    if ($('.speed3').length > 0) {
        var speed = 60000;
    }    
    
    $.when( scrollTop() ).done(function() {
            setTimeout(scrollHeight, 100);
        });
    
        function scrollTop() {
            $('html,body').scrollTop(0);
        }
    
    $(window).on("resize", function () {
        scrollHeight();
    });
    
    function scrollHeight() {
        var div = $(".auto");
        var bottom = div.offset().top + div.height();
        console.log(bottom);
        $("body,html").animate({ scrollTop: bottom, eassing:"linear" }, speed);
    }
       
      
        
      



});