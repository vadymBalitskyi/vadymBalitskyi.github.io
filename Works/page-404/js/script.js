$(document).ready(function(){
  $( '.content__h1' ).hover(
    function(){
      $(this)
      .animate({
        fontSize: "85px",
        opacity: '1'
      }, 400 )
    },
    function(){
      $(this)
      .stop(true)
      .animate({
          fontSize: "65px",
          opacity: '.8'
      }, 600 )
    });
});
