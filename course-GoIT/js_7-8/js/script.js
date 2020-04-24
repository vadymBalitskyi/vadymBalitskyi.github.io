
// Homework_7
$(function() {
	$('.tabs__caption').on('click', '.tabs__li', function() {
		$(this)
		.addClass('active').siblings().removeClass('active')
		.closest('.tabs').find('.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	});
});
	// $('.tabs__caption').on('click', '.tabs__li:not(.active)', function() {
	// 	$(this)
	// 	.addClass('active').siblings().removeClass('active')
	// 	.closest('.tabs').find('.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	// });

	// var $a = $('li')
	// // .closest('.tabs__li')
	// .siblings('.active')
	// .css({
	// 	color: '#fff',
	// 	backgroundColor: '#0061ff',
	// 	border: '1px solid #0061ff'
	// });

	// var $first = $('.first'),
	// 		$second = $('.second'),
	// 		$third = $('.third');

	// $first.click(function () {
	// 	$first.css({
	// 		color: '#fff',
	// 		backgroundColor: '#0061ff',
	// 		border: '1px solid #0061ff'
	// 	});
	// }),
	// $second.click(function () {
	// 	$second.css({
	// 		color: '#fff',
	// 		backgroundColor: '#0061ff',
	// 		border: '1px solid #0061ff'
	// 	});
	// }),
	// $third.click(function () {
	// 	$third.css({
	// 		color: '#fff',
	// 		backgroundColor: '#0061ff',
	// 		border: '1px solid #0061ff'
	// 	});
		// $wrapSecondTabs.css({
		// 	height: '350px'
		// });
	// })

// Homework_8
var title;
$('input').hover(function(){
    title = $(this).attr('title');
    $(this).attr('title', '');
    $(this).parent('label').append("<div class='title'>"+title+"</div>")
},
function(){
    $('.title').remove();
    $(this).attr('title', title);
})

$( "form" ).on('submit', function(e) {
    e.preventDefault();
    $('.title').remove()
    $('input').each(function () {
        var title = $(this).attr('title');
        $(this).parent('label').append('<span class="title">' + title + '</span>');
      });
      return false;
});

// $button.mousedown(
// 	function () {
// 		$(this).css({
// 			color: '#fff',
// 			backgroundColor: '#0061ff',
// 			border: '1px solid #0061ff'
// 		});
// })
//
// $button.mouseup(
// 	function () {
// 		$(this).css({
// 			color: '#000',
// 			backgroundColor: '#eee',
// 			border: '0px'
// 		});
// })

// //
// $(function() {
// 		var $button = $('.button'),
// 				$firstName = $(firstname),
// 				$lastName = $(lastname),
// 				$address = $(address),
// 				$hint = $('.hint'),
// 				$hide = $('.hide'),
// 				$formInput = $('.form__input')
//
// 		var $titleFirst = $firstName.attr('title')
// 		$(h1).append($titleFirst);
//
// 		var $titleSecond = $lastName.attr('title');
// 		$(h2).append($titleSecond);
//
// 		var $titleThird = $address.attr('title');
// 		$(h3).append($titleThird);
//
// 		$firstName.mouseover(function(){
// 			$(h1).removeClass("hide");
// 		});
// 		$lastName.mouseover(function(){
// 			$(h2).removeClass("hide");
// 		});
// 		$address.mouseover(function(){
// 			$(h3).removeClass("hide");
// 		});
//
// 		$firstName.mouseout(function(){
// 			$(h1).addClass("hide");
// 		});
// 		$lastName.mouseout(function(){
// 			$(h2).addClass("hide");
// 		});
// 		$address.mouseout(function(){
// 			$(h3).addClass("hide");
// 		});
//
// 		$button.click(function(){
// 			$hint.removeClass("hide");
// 			$hint.removeClass("hide");
// 			$hint.removeClass("hide");
// 		});
// });



		// $button.mousedown(
		// 	function () {
		// 		$(this).css({
		// 			color: '#fff',
		// 			backgroundColor: '#0061ff',
		// 			border: '1px solid #0061ff'
		// 		});
		// 		$hint.css({
		// 			display: 'block'
		// 	});
		// })
		//
		// $button.mouseup(
		// 	function () {
		// 		$(this).css({
		// 			color: '#000',
		// 			backgroundColor: '#eee',
		// 			border: '0px'
		// 		});
		// })
		//
		// $firstName.hover(
		// 	function () {
		// 		$hintFirst.css({
		// 			display: 'block'
		// 		});
		// 	},
		// 	function () {
		// 		$hintFirst.css({
		// 			display: 'none'
		// 		});
		// }),
		// $lastName.hover(
		// 	function () {
		// 		$hintSecond.css({
		// 			display: 'block'
		// 		});
		// 	},
		// 	function () {
		// 		$hintSecond.css({
		// 			display: 'none'
		// 		});
		// }),
		// $address.hover(
		// 	function () {
		// 		$hintThird.css({
		// 			display: 'block'
		// 		});
		// 	},
		// 	function () {
		// 		$hintThird.css({
		// 			display: 'none'
		// 		});
		// })
