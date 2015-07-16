$("form span").hide(); //Hides the span tag



// function that will validate and check for a character length of 8. If there is a length of more than 8 it will hide the span tag. 
function passwordEvent() {

	if ($(this).val().length > 8) {
		
		$(this).next().hide();
	} else {

		$(this).next().show();
	}
}

//
function confirmPasswordEvent() {

	if ($("password").val() === $("confirm_password").val()) {
		
		$(this).next().hide();
	} else {

		$(this).next().show();
	}

}
 

//Password
$("#password").focus(passwordEvent).keyup(passwordEvent);


//Confirm Password
$("#confirm_password").focus(confirmPasswordEvent).keyup(confirmPasswordEvent);