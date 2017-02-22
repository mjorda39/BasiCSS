<?php
$firstName = $_POST['firstname'];
$lastName = $_POST['lastname'];
$email = $_POST['email'];
$description = $_POST['kindOfPerson'];
$experience = $_POST['experience'];
$comments = $_POST['comments'];

$data = array($firstName, $lastName, $email, $description, $experience, $comments, "\n");
$fileName = "surveydata.txt";
$writeData = file_put_contents($fileName, implode("\t", $data), FILE_APPEND);
if($writeData == false) {
	die("Could't write file.");
} else {
	include 'survey.html';
}
?>