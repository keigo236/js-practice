'use strict'
// クリックしたときにアンサーが表示される
$(function () {
  $(".question").click(function () {
    $(this).toggleClass("open");
    $(".question").not($(this)).removeClass("open");
  });
});