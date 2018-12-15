// $('.toggle_menu').click(function(e) {
//   e.preventDefault();
//   $(this).prev().slideToggle("1000");
//   $(this).find("i").toggleClass("open");
// });
$('.menu_1').click(function(e) {
  e.preventDefault();
  $('.box').slideToggle("10");
});
$('.menu_2').click(function(e) {
  e.preventDefault();
  $('.sidebar').slideToggle("10");
});
