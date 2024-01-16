$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();


    /* Fixed Header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset) {

      if (scrollOffset >= introH) {
          header.addClass("fixed");
      } else {
          header.removeClass("fixed");
      }
    }

    /* Smooth Scroll */
    $("[data-scroll]").on("click", function(event) {
       event.preventDefault();

        var $this = $(this),
            blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

    $("html, body").animate({
        scrollTop: blockOffset
    }, 500);

    });



/* Menu nav toggle */

$("#nav_toggle").on("click", function(event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
});


/* Collapse */
$("[data-collapse]").on("click", function(event){
    event.preventDefault();

      var $this = $(this),
            blockId = $(this).data('collapse');

    $this.toggleClass("active"); /* не работает */

    $(blockId).slideToggle();
});


/* Slider */
    $("[data-slider]").slick({
        infinite: true,
        fade: false,  /* если хотим мерцание в млайдере, а не перелистывание, то нужно true */
        slidesToShow: 1,
        slidesToScroll: 1
    });









});
