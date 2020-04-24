'user strict';

$("#button").click(function(event){
var txt = $("#search__group").val();
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
