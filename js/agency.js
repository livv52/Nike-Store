(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

  $(function(){
    $('#collapse1').on('hide.bs.collapse', function () {
      $('#button-c-1-j').html('<img class="myslide-m" src="resources/PNG/Shoes/Sliders/slideJos.png">');
    })
    $('#collapse1').on('show.bs.collapse', function () {
      $('#button-c-1-j').html('');
    })
    $('#collapse1').on('hide.bs.collapse', function () {
      $('#button-c-1-s').html('');
    })
    $('#collapse1').on('show.bs.collapse', function () {
      $('#button-c-1-s').html('<img class="myslide-m" src="resources/PNG/Shoes/Sliders/slideSus.png">');
    })
  })

  $(function(){
    $('#collapse2').on('hide.bs.collapse', function () {
      $('#button-c-2-j').html('<img class="myslide-m" src="resources/PNG/Shoes/Sliders/slideJos.png">');
    })
    $('#collapse2').on('show.bs.collapse', function () {
      $('#button-c-2-j').html('');
    })
    $('#collapse2').on('hide.bs.collapse', function () {
      $('#button-c-2-s').html('');
    })
    $('#collapse2').on('show.bs.collapse', function () {
      $('#button-c-2-s').html('<img class="myslide-m" src="resources/PNG/Shoes/Sliders/slideSus.png">');
    })
  })

  $(function(){
    $('#collapse3').on('hide.bs.collapse', function () {
      $('#button-c-3-j').html('<img class="myslide-m" src="resources/PNG/Shoes/Sliders/slideJos.png">');
    })
    $('#collapse3').on('show.bs.collapse', function () {
      $('#button-c-3-j').html('');
    })
    $('#collapse3').on('hide.bs.collapse', function () {
      $('#button-c-3-s').html('');
    })
    $('#collapse3').on('show.bs.collapse', function () {
      $('#button-c-3-s').html('<img class="myslide-m" src="resources/PNG/Shoes/Sliders/slideSus.png">');
    })
  })

  $(function(){
    $('#collapse4').on('hide.bs.collapse', function () {
      $('#button-c-4-j').html('<img class="myslide-m" src="resources/PNG/Shoes/Sliders/slideJos.png">');
    })
    $('#collapse4').on('show.bs.collapse', function () {
      $('#button-c-4-j').html('');
    })
    $('#collapse4').on('hide.bs.collapse', function () {
      $('#button-c-4-s').html('');
    })
    $('#collapse4').on('show.bs.collapse', function () {
      $('#button-c-4-s').html('<img class="myslide-m" src="resources/PNG/Shoes/Sliders/slideSus.png">');
    })
  })

  $(function(){
    $('#collapse5').on('hide.bs.collapse', function () {
      $('#button-c-5-j').html('<img class="myslide-m" src="resources/PNG/Shoes/Sliders/slideJos.png">');
    })
    $('#collapse5').on('show.bs.collapse', function () {
      $('#button-c-5-j').html('');
    })
    $('#collapse5').on('hide.bs.collapse', function () {
      $('#button-c-5-s').html('');
    })
    $('#collapse5').on('show.bs.collapse', function () {
      $('#button-c-5-s').html('<img class="myslide-m" src="resources/PNG/Shoes/Sliders/slideSus.png">');
    })
  })

  $(function(){
    $('#collapse6').on('hide.bs.collapse', function () {
      $('#button-c-6-j').html('<img class="myslide-m" src="resources/PNG/Shoes/Sliders/slideJos.png">');
    })
    $('#collapse6').on('show.bs.collapse', function () {
      $('#button-c-6-j').html('');
    })
    $('#collapse6').on('hide.bs.collapse', function () {
      $('#button-c-6-s').html('');
    })
    $('#collapse6').on('show.bs.collapse', function () {
      $('#button-c-6-s').html('<img class="myslide-m" src="resources/PNG/Shoes/Sliders/slideSus.png">');
    })
  })

})(jQuery); // End of use strict
