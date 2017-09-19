$(document).ready(function() {
	var screen_text;
	$("*:not(body)").hover(
		function(event) {
			$(".highlight").addClass("highlight");
			$(this).addClass("highlight");


			var tagname = this.tagName;
			if (tagname == "IMG") {
				console.log(tagname.attr)
				console.log(tagname)
				if ($(this).attr('title')) {
					console.log($(this).attr('title'))
					screen_text = $(this).attr('title')
					console.log($(this).attr('title'))
				}
			}
			else {
				screen_text = $(this).text();
			}	
			//var text = $(this).text();
			//speechSynthesis.cancel();
			//speechSynthesis.speak(new SpeechSynthesisUtterance(text));

			event.stopPropagation();
		},
		function(event) {
			$(this).removeClass("highlight");
		}
	);
	$(document).keydown(function(event) {
  		if (event.keyCode == 32) {
  			//var body = document.body;
			//var textContent = body.textContent || body.innerText;
			//var t = $(this).textContent;
    		//var text = $(this).text();
			speechSynthesis.cancel();
			console.log('aqiu')
			console.log(screen_text)
			speechSynthesis.speak(new SpeechSynthesisUtterance(screen_text));

			//event.stopPropagation();
 			event.preventDefault();
  		}
	})
})

	/*var sentence = new SpeechSynthesisUtterance();
	sentence.text = "Emily Osborne";
	sentence.lang = "en-US";
	sentence.rate = 1.2;
	sentence.onend = function(event) { alert("Finished in " + event.elapsedTime + "miliseconds."); }
	speechSynthesis.speak(sentence);*/