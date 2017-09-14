console.log("oi");

/*$(document).ready(function() {
	$("*:not(body)").hover(
		function(event) {
			$(".strongoutline").removeClass("strongoutline");
			$(this).addClass("strongoutline");

			var text = $(this).text();
			speechSynthesis.cancel();
			speechSynthesis.speak(new SpeechSynthesisUtterance(text));

			event.stopPropagation();
		},
		function(event) {
			$(this).removeClass("strongoutline");
		}
	);
})

	var sentence = new SpeechSynthesisUtterance();
	sentence.text = "Marina Leao Lucena";
	sentence.lang = "en-US";
	sentence.rate = 1.2;
	sentence.onend = function(event) { alert("Finished in " + event.elapsedTime + "miliseconds."); }
	speechSynthesis.speak(sentence);*/