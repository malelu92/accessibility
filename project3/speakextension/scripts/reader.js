$(document).ready(function() {
	var screen_text;
	$("*:not(body)").hover(
		function(event) {
			$(".highlight").addClass("highlight");
			$(this).addClass("highlight");

			if (this.tagName == "IMG") {
				if ($(this).attr('title')) {
					screen_text = $(this).attr('title')
				}
				else if ($(this).attr('alt')){
					screen_text = $(this).attr('alt');
					console.log('l1');
				}
				else if ($(this).attr('src')){
					screen_text = $(this).attr('src');
					console.log('l2');
				}
			}
			else {
				screen_text = $(this).text();
			}	

			event.stopPropagation();
		},
		function(event) {
			$(this).removeClass("highlight");
		}
	);
	$(document).keydown(function(event) {
  		if (event.keyCode == 32) {
			speechSynthesis.cancel();
			console.log('aqiu')
			console.log(screen_text)
			speechSynthesis.speak(new SpeechSynthesisUtterance(screen_text));

 			event.preventDefault();
  		}
	})
})