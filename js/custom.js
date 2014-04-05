$(function () {

	/* Countdown Timer
	================================================== */
	var austDay = new Date();
	austDay = new Date(austDay.getFullYear() + 1, 4, 26);
	$('#defaultCountdown').countdown({until: austDay});

	/* subscribe form
	================================================== */

	$(".subscribe-submit").click(function(){
		var valid = '';
		var isr = ' required.';
		var email = $(".email").val();
		
		if (!email.match(/^([a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$)/i)) {
			valid += '<br />Email'+isr;
		}
		if (valid!='') {
			$("#response").fadeIn("slow");
			$("#response").html("Email required");
		}
		else {
			var datastr ='&email=' + email;
			$("#response").css("display", "block");
			$("#response").html("Sending...");
			$("#response").fadeIn("slow");
			setTimeout("send('"+datastr+"')",2000);
		}
		return false;
	});

});


function send(datastr){
	/* Ajax Post form
	================================================== */
	$.ajax({	
		type: "POST",
		url: "subscribe.php",
		data: datastr,
		cache: false,
		success: function(html){
		$("#response").fadeIn("slow");
		$("#response").html(html);
		setTimeout('$("#response").fadeOut("slow")',2500);
	}
	});
}