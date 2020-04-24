$(function () {
    var $links = $('.set__item');

    $links.on('click', function(e) {
      var $submenu = $(this).siblings('.content');
      e.preventDefault();
      $submenu.slideToggle();
      $(this).toggleClass("active");
      $(this).find(".set__i").toggleClass("icon-fa-minus");
  });
})


// Accardion

// $(document).ready(function(){
//   $(".set__item").on("click", function(){
//     if($(this).hasClass('active')){
//       $(this).removeClass("active");
//       $(this).siblings('.content').slideUp(200);
//       $(".set__i").removeClass("icon-fa-minus").addClass("icon-fa-plus");
//     }else{
//       $(".set__i").removeClass("icon-fa-minus").addClass("icon-fa-plus");
//     $(this).find(".set__i").removeClass("icon-fa-plus").addClass("icon-fa-minus");
//     $(".set__item").removeClass("active");
//     $(this).addClass("active");
//     $('.content').slideUp(200);
//     $(this).siblings('.content').slideDown(200);
//     }
//
//   });
// });
