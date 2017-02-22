//validation function. called by clicking the form submit button
function checkEmpty() {
	//check all input form fields except slider which defaults to 3
	var firstname = document.getElementById('firstname').value;
	var lastname = document.getElementById('lastname').value;
	var email = document.getElementById('email').value;
	var person = document.getElementsByName("kindOfPerson");
	var comments = document.getElementById('comments').value;
	//return false if any of the important information is empty
	//or if the email is invalid or a radio button is not selected
	if(firstname == '' || lastname == '') {
		alert("Please fill out your first and last name.");
		return false;
	} else if(email == '' || email.indexOf('@') < 0 || email.indexOf('.') < 0) {
		alert("Either you did not give an email or it is invalid.");
		return false;
	} else if(person[0].checked == false && person[1].checked == false && person[2].checked == false && person[3].checked == false) {
		alert("Please select what accurately describes you.");
		return false;
	}else if(comments == '') {
		alert("You don't want to leave a comment?");
		return false;
	} else {
		//if all is well, alert that the form was successfully submitted
		submitted();
	}
	//Debugging: alert("First name: " + firstname + " last name: " + lastname + " email: " + email + " comments: " + comments);
}

function submitted() {
	alert("Form successfully submitted!");
}