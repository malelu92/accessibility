$(document).ready(function() {
	var screen_text;
	$("*:not(body)").hover(
		function(event) {
			$(".highlight").addClass("highlight");
			$(this).addClass("highlight");
			screen_text = $(this).text();
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
			speechSynthesis.speak(new SpeechSynthesisUtterance(screen_text));

			//event.stopPropagation();
 			event.preventDefault();
  		}
	})
})

	/*var sentence = new SpeechSynthesisUtterance();
	sentence.text = "Marina Leao Lucena";
	sentence.lang = "en-US";
	sentence.rate = 1.2;
	sentence.onend = function(event) { alert("Finished in " + event.elapsedTime + "miliseconds."); }
	speechSynthesis.speak(sentence);*/