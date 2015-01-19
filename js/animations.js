$(document).ready(function() {

$("#tweet-controls").hide();
$('#char-count').hide();

$('.tweet-compose').on('click', function() {
	//#2 done
	$("#tweet-controls").show();
	$('#char-count').show();
	$(this).css('height','5em');
	
})

//numbers in twitter count should decrease
$('.tweet-compose').keyup(function() {
	var maxLength = 140;
	var chars = $(this).val().length
	var chars1 = maxLength - chars;
	$('#char-count').text(chars1)
	if(chars1 < 10) {
		$('#char-count').css('color', 'red')		
	};
		if(chars1 > 10) {
			$('#char-count').css('color', '#999')
		}
		// cant tell if this works?????
			if(chars1 < 0) {
				$("#tweet-submit").prop('disabled', true);
			} else {
				$('#tweet-submit').prop('disabled', false);
			}
	
	
});




$('#tweet-submit').on('click', function() {
	$('#stream').prepend(
		'<div class="tweet">' +
		'<div class="content">' + 
		'<img class="tweet, avatar" src="img/alagoon.jpg" />' +
		'</div>' +
		'<strong class="tweet, fullname">' + "your name here" + '</strong>' +
		'<span class="tweet, username">' + '@ladd' + '</span>' +
		'</div>'

		)
	
});

// hide elements until you hover over them
// whenever i hover i get an error.

$('.tweet-actions').hover('handlerIn', function() {
	$('.tweet-actions').show();

})






	
})