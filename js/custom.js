jQuery(function ($) {
    'use strict';

    var win = $(window);
    /*============================================
     PAGE LOADER
     ==============================================*/
    var page_loader = $('#page-loader');
    win.on('load', function () {
        page_loader.fadeOut(500);
    });
    
    /*============================================
    banner-slider
     ==============================================*/
    var swiper = new Swiper('.banner-swiper', {
      effect: 'fade',
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });



    /*============================================
    testimonial-slider
     ==============================================*/
    var swiper = new Swiper('.testimonial-slider', {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
     breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        991: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      }
    });

    /*============================================
    gallery-slider
     ==============================================*/
    var swiper = new Swiper('.gallery-swiper', {
      slidesPerView: 3,
      spaceBetween:0,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
     breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        991: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      }
    });

    /*============================================
    COUNTER
     ==============================================*/
    var count = $('.count');
    if (count.length) {
        count.counterUp({
            delay: 10,
            time: 1000
        });
    }

    /*============================================
    MASONRY GRID
     ==============================================*/
     var masonry_grid = $(".masonry-grid");
    if (masonry_grid.length)
    {
        var $grid = masonry_grid.imagesLoaded(function () {
            // init Masonry after all images have loaded
            $grid.masonry({
                itemSelector: ".masonry-item"
            });
        });
    }
    /*============================================
      match height
    ==============================================*/
    var equal_height = $(".equal-height");
        if (equal_height.length)
        {   
          equal_height.matchHeight();
        }

  /*============================================
    ISOTOP GALLERY
  ==============================================*/
    var isotopeContainer = $('.isotopeContainer');
    var isotopeFilters = $('.isotopeFilters');
    if (isotopeContainer.length) {

        if (!isotopeContainer.length || !jQuery().isotope)
            return;
        win.on('load', function () {
            isotopeContainer.isotope({
                itemSelector: '.isotopeSelector'
            });
            isotopeFilters.on('click', 'a', function (e) {
                isotopeFilters.find('.active').removeClass('active');
                $(this).parent().addClass('active');
                var filterValue = $(this).attr('data-filter');
                isotopeContainer.isotope({
                    filter: filterValue
                });
                e.preventDefault();
            });
        });

    }

    /*============================================
        MAGNIFIC-POPUP
     ==============================================*/
     var parent_container = $('.parent-container');
     if (parent_container.length)
     {
         parent_container.magnificPopup(
        {
          delegate: 'a', // child items selector, by clicking on it popup will open
          type: 'image',
          titleSrc: 'title',
          gallery: {enabled: true},
          zoom: 
          {
            enabled: true, // By default it's false, so don't forget to enable it
            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function
            opener: function(openerElement) {
            return openerElement.is('a') ? openerElement : openerElement.find('a');}
          }
        });
    }

    /*============================================
        select box
     ==============================================*/
     var select_box = $('.js-example-basic-single');
     if(select_box.length)
     {
      select_box.select2();
     }

    /*============================================
        collapse
     ==============================================*/
     var panel_group = $('.panel-group');
     if (panel_group.length)
     {
     function toggleIcon(e) {
          $(e.target)
              .prev('.panel-heading')
              .find(".more-less")
              .toggleClass('ti-angle-up ti-angle-down');
      }
      $('.panel-group').on('hidden.bs.collapse', toggleIcon);
      $('.panel-group').on('shown.bs.collapse', toggleIcon);
      }

    /*============================================
        parallex
     ==============================================*/
     var modern_banner = $('.morder-banner');
     if(modern_banner.length)
     {
        $.stellar();
     }
     
    /*============================================
        scroll to
     ==============================================*/
     var demo_btn = $(".demo-btn");
     if (demo_btn.length)
     {
        demo_btn.on('click', function() 
        {
            $('html,body').animate({
                scrollTop: $(".target-btn").offset().top},
              'slow');
        });
     }


    });


(function(){ var widget_id = 'WKOPjh2FR1';var d=document;var w=window;function l(){
  var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true;
  s.src = '//code.jivosite.com/script/widget/'+widget_id
    ; var ss = document.getElementsByTagName('script')[0]; ss.parentNode.insertBefore(s, ss);}
  if(d.readyState=='complete'){l();}else{if(w.attachEvent){w.attachEvent('onload',l);}
  else{w.addEventListener('load',l,false);}}})();

