$(function () {
    var $links = $('.menu a');

    $links.on('click', function(e) {
      var $submenu = $(this).siblings('.submenu');
      e.preventDefault();
      $submenu.slideToggle();
  });
})

$(document).ready(function(){

$(".submenu__item").click(
  function () {
	$(this)
  .css({
    backgroundColor:"#4d8ff9"
  })
});

$( '.submenu__item' ).hover(
  function(){
    $(this)
    .animate({
      paddingLeft: "20px"
    }, 400 )
  },
  function(){
    $(this)
    .animate({
        paddingRight: "20px",
    }, 600 )
  });

});

// function slideColor(element) {
//   var colorPosition = 0;
//   sesInterval(function () {
//     colorPosition += 1;
//     element.style.color = colorPosition + red;
//   },50);
// }
// var submenu = document.querySelector('.js-submenu');
//
// submenu.addEventListener('click', function () {
//   slideColor(submenu);
// })

$(document).ready(function() {
   $( '.dropdown' ).hover(
       function(){
           $(this)
           .children('.submenu')
           .stop(true)
           .slideDown(400)
       },
       function(){
           $(this)
           .children('.submenu')
           .slideUp(400)
 });
 });
