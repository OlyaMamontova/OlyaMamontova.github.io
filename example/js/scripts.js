$('.toggle_menu').click(function(e) {
  e.preventDefault();
  $(this).prev().slideToggle("1000");
  $(this).find("i").toggleClass("open");
});
