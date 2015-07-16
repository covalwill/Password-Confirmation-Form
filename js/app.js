var $password = $("#password");
var $confirmPassword = $("#confirm_password");

//Hides the span tag
$("form span").hide(); 

// function that will validate and check for a character length of 8. If there is a length of more than 8 it will hide the span tag. 
function passwordEvent() {

    if($password.val().length > 8) {

      $password.next().hide();
    } else {
      
      $password.next().show();
    }
}


function confirmPasswordEvent(){

  if($password.val() === $confirmPassword.val()) {

    $confirmPassword.next().hide();
  } else{

    $confirmPassword.next().show();
  }
}
 

//Password
$password.focus(passwordEvent).keyup(passwordEvent).focus(confirmPasswordEvent).keyup(confirmPasswordEvent);


//Confirm Password
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent);
