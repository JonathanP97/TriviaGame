$(window).on("load", function() {

	var timeRemaining = 41;
	var intervalId;
	time();

	function time() {

		if(timeRemaining == 0) {
			clearTimeout(intervalId);
		} else {
			timeRemaining--;
			$("#spanTime").html(timeRemaining)
			intervalId = setTimeout(time,1000);
		}
	}

})

