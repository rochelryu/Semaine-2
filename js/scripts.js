
(function() {
    "use strict";

    // custom scrollbar

    $("html").niceScroll({styler:"fb",cursorcolor:"#44c2f4", cursorwidth: '6', cursorborderradius: '10px', background: '#3a3a3c', spacebarenabled:false, cursorborder: '0',  zindex: '1000'});

    $(".scrollbar1").niceScroll({styler:"fb",cursorcolor:"#44c2f4", cursorwidth: '6', cursorborderradius: '0',autohidemode: 'false', background: '#3a3a3c', spacebarenabled:false, cursorborder: '0'});

	
	
    $(".scrollbar1").getNiceScroll();
    if ($('nav.gn-menu-wrapper').hasClass('scrollbar1-collapsed')) {
        $(".scrollbar1").getNiceScroll().hide();
    }

    $('#bs-example-navbar-collapse-1').on('mouseover', 'ul li',function() {
        $(this).stop().animate({backgroundPosition:"0px -280px"}, 300);
    });
    $('#bs-example-navbar-collapse-1').on('mouseout', 'ul li', function() {
        $(this).stop().animate({backgroundPosition:"0px 0px"}, 600)
    });

})(jQuery);

                     
     
  