$(function () {
  //convert img to svg
  SVGInject(document.querySelectorAll("img.injectable"));
  $("#btnLanguage").click(function () {
    $(this).siblings(".language_overlay").stop().slideToggle("fast");
  });
});
