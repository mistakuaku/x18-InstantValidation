function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  var posZeroes = userEntered.search(" "); //checks if there are spaces

  //checks if the password string is 8 characters
  if(passEntered.length == 8) {
    var posPass = passEntered.search(/password/i); //checks if password is in the string regardless of case
  }

//if the username is less than 6 chars or has any spaces it fails
  if (userEntered.length < 6 || posZeroes > -1) {
    //check what the error is and display the right error message
    if (userEntered.length < 6) {
      document.getElementById("usernameError").innerHTML="Username needs to be least be 6 characters.";
    }
    else{
      document.getElementById("usernameError").innerHTML="Username can not contain spaces.";
    }
    //Show message that there is an error with the username...
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  else {
    //document.getElementById("usernameError").innerHTML="Success.";
    document.getElementById("usernameError").classList.add("hidden-message");
    document.getElementById("usernameError").classList.remove("shown-message");
    document.getElementById("usernameGroup").classList.remove("has-error");
    document.getElementById("usernameGroup").classList.add("has-success");

  }
//if the passward starts with 'password', same as user, less than 6 chars, greater than 20 chars it fails
  if (posPass == 0 || passEntered == userEntered || passEntered < 6 || passEntered > 20){
//checks which error is occuring and displays the correct error message
    if(posPass == 0) {
      document.getElementById("passwordError").innerHTML="Password can not be password.";
    }
    else if(passEntered == userEntered){
      document.getElementById("passwordError").innerHTML="Password can not be the same as your Username.";
    }
    else if(passEntered.length < 6){
      document.getElementById("passwordError").innerHTML="Password needs to be at least 6 characters.";
    }
    else if(passEntered.length > 20){
      document.getElementById("passwordError").innerHTML="Password needs to be less than 20 characters.";
    }
    //Show message that there is an error with the password...

    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else {
  //document.getElementById("passwordError").innerHTML="Success.";
  document.getElementById("passwordError").classList.add("hidden-message");
  document.getElementById("passwordError").classList.remove("shown-message");
  document.getElementById("passwordGroup").classList.remove("has-error");
  document.getElementById("passwordGroup").classList.add("has-success");
  }

}
