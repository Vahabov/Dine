$(function () {
  //convert img to svg
  SVGInject(document.querySelectorAll("img.injectable"));

  AOS.init({
    disable: "mobile", // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  });

  $(window).click(function () {
    $("#btnLanguage").siblings(".language_overlay").fadeOut("fast");
  });

  if ($(".owl-carousel")[0]) {
    $(".footer_top .owl-carousel").owlCarousel({
      margin: 0,
      loop: true,
      nav: false,
      dots: false,
      autoWidth: false,
      items: 6,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: false,
      responsive: {
        0: {
          items: 1,
        },
        450: {
          items: 2,
        },
        764: {
          items: 4,
          nav: false,
          loop: true,
        },
        1300: {
          items: 6,
        },
      },
    });
  }
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $("#scroll-top").fadeIn();
    } else {
      $("#scroll-top").fadeOut();
    }
  });
  $("#scroll-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
    return false;
  });
  $("#btnLanguage").click(function (e) {
    e.stopPropagation();
    $(this).siblings(".language_overlay").stop().slideToggle("fast");
  });
});
