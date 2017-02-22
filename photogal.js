window.onload = function() {
	document.getElementById("btn0").onclick = original;
	document.getElementById("btn1").onclick = inline;
	document.getElementById("btn2").onclick = internal;
	document.getElementById("btn3").onclick = external;
};

function original() {
	document.getElementById("image").src = "slideshow.png";
}

function inline() {
	document.getElementById("image").src = "inline.png";
	desc1.className = "revealed";
	desc2.className = "hidden";
	desc3.className = "hidden";
}

function internal() {
	document.getElementById("image").src = "internal.jpg";
	desc1.className = "hidden";
	desc2.className = "revealed";
	desc3.className = "hidden";
}

function external() {
	document.getElementById("image").src = "external.gif";
	desc1.className = "hidden";
	desc2.className = "hidden";
	desc3.className = "revealed";
}

function enlarge() {
	document.getElementById("image").style.width = "800px";
	document.getElementById("image").style.height = "400px";
	document.getElementById("image").style.left = "20%";
}

function shrink() {
	document.getElementById("image").style.width = "400px";
	document.getElementById("image").style.height = "300px";
	document.getElementById("image").style.left = "35%";
}