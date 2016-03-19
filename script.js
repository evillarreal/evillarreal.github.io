// Currently all of this controls the scrolling function on the "Photos" page

 $(function(){
        var scroller = $('#scroller div.innerScrollArea');
        var scrollerContent = scroller.children('ul');
        scrollerContent.children().clone().appendTo(scrollerContent);
        var curX = 0;
        scrollerContent.children().each(function(){
            var $this = $(this);
            $this.css('left', curX);
            curX += $this.outerWidth(true);
        });
        var fullW = curX / 2;
        var viewportW = scroller.width();

        // Scrolling speed management
        var controller = {curSpeed:0, fullSpeed:2.5};
        var $controller = $(controller);
        var tweenToNewSpeed = function(newSpeed, duration)
        {
            if (duration === undefined)
                duration = 600;
            $controller.stop(true).animate({curSpeed:newSpeed}, duration);
        };

        // Change speed on hover
        scroller.hover(function(){
            tweenToNewSpeed(0);
        }, function(){
            tweenToNewSpeed(controller.fullSpeed);
        });

        // Captions become visible on hover
        var gallery = $('.gallery div#images');
        $('.captions').hide();
        gallery.hover(function(){
 			$('.captions').toggle();
        });
  

        // Scrolling management; start the automatical scrolling
        var doScroll = function()
        {
            var curX = scroller.scrollLeft();
            var newX = curX + controller.curSpeed;
            if (newX > fullW*2 - viewportW)
                newX -= fullW;
            scroller.scrollLeft(newX);
        };
        setInterval(doScroll, 20);
        tweenToNewSpeed(controller.fullSpeed);
    	});

// Code to adjust content positioning on resize
function checkWidth() {
    var width = $( window ).width();
    if (width < 435) {
        $( ".resume_text" ).css( "top", 300 );
        $( ".writing_text" ).css( "top", 300 );
        $( ".gr_grid_container").css( "top", 300 );
    }else if (width < 509) {
        $( ".resume_text" ).css( "top", 250 );
        $( ".writing_text" ).css( "top", 250 );
        $( ".gr_grid_container").css( "top", 250 );
    } else if (width < 841) {
        $( ".resume_text" ).css( "top", 210 );
        $( ".writing_text" ).css( "top", 210 );
        $( ".gr_grid_container").css( "top", 210 );
    }else {
        $( ".resume_text" ).css( "top", 170 );
        $( ".writing_text" ).css( "top", 170 );
        $( ".gr_grid_container").css( "top", 170 );
    };
    console.log($( window ).width())
  // $( ".resume_text" ).css( "top", $( window ).width() );
}

// call checkWidth on resize
$( window ).resize(checkWidth);

// call checkWidth on load
$( document ).ready(checkWidth);

