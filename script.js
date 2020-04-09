$(window).on('load resize', function () {
  var height = $('.navbar').outerHeight();
  $('body').css('padding-top', height);
  $('body').css('padding-bottom', height);
  $('.content').css('padding-top', height);
});

$(document).ready(function () {
  $(".navbar-nav li a").click(function (event) {
    $(".navbar-collapse").collapse('hide');
  });
});