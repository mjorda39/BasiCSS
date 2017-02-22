window.onload = function () {
	document.getElementById("nightView").onclick = nightView;
	document.getElementById("treeHugger").onclick = treeHugger;
	document.getElementById("sportsFan").onclick = sportsFan;
	document.getElementById("computerGeek").onclick = computerGeek;
}
//styles page with moonlit background and red/black colors
function nightView() {
	document.getElementById('wrapper').style.backgroundImage = "url(../images/night_view.jpg)";
	document.getElementById('main_footer').style.backgroundColor = "red";
	document.getElementById('main_header').style.color = "red";
	document.getElementById('wrapper').style.color = "white";
	document.getElementById('main_header').style.fontFamily = "script";
}
//styles page with environmentalist background and green/brown colors
function treeHugger() {
	document.getElementById('wrapper').style.backgroundImage = "url(../images/tree_hugger.jpg)";
	document.getElementById('main_footer').style.backgroundColor = "#654321";
	document.getElementById('main_header').style.color = "#654321";
	document.getElementById('wrapper').style.color = "white";
}
//styles page with lakers background and yellow/purple
function sportsFan() {
	document.getElementById('wrapper').style.backgroundImage = "url(../images/lakers.jpg)";
	document.getElementById('main_footer').style.backgroundColor = "#5a0f80";
	document.getElementById('main_header').style.color = "#5a0f80";
	document.getElementById('wrapper').style.color = "white";
}
//styles page with slick binary background and blue/silver colors
function computerGeek() {
	document.getElementById('wrapper').style.backgroundImage = "url(../images/code.gif)";
	document.getElementById('main_footer').style.backgroundColor = "#c0c0c0";
	document.getElementById('main_header').style.color = "#c0c0c0";
	document.getElementById('wrapper').style.color = "white";
}
//jquery to toggle paragraphs when user clicks on the title
$(document).ready(function (){
	$("h2").click(function (){
		$(this).next().fadeToggle("slow");
	});
});