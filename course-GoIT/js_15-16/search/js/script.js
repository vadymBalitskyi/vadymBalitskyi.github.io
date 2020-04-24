'user strict';

$("#button").click(function(event){
var txt = $("#search").val();
console.log(txt);
$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?tags="+txt+"&tagmode=any&format=json&jsoncallback=?",
	function(data){
	console.log(data);
				$.each(data.items, function(i,item){
				$("<img/>").attr("src", item.media.m).appendTo("#example_j");

				});
			});
			event.preventDefault();
					 });


// function GoogleCallback(jqueryObj, data) {
// 	console.log('data', data)
// }
//
//
// $(function(){
//
// 	$.ajax({
// 		url: "http://ajax.googleapis.com/ajax/services/search/web?v=1.0?key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&q=PHP&callback=GoogleCallback&context=?" ,
// 		dataType: 'jsonp'
// 	});
//
// 	// callback function
// 	function GoogleCallback (func, data) {
// 	    window[func](data);
// 	}
//
//
//
//
// });
