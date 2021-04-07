//Home Page
function greetings(){
	//1. Access input HTML element >>> Query Selector
	let fname = document.querySelector('#fname')
	console.log(fname);

	//2. Get Value of HTML input element
	let fValue = fname.value;
	console.log(fValue);

	//3. Access <h1> Element
	let greetings = document.querySelector('h1 > span');
	console.log(greetings);

	//4. Change content of <h1> element
	greetings.innerHTML = fValue;

	//Showing different buttons after Onclick
	let header = document.getElementById("header");
	var home = document.getElementById("home-btn");

	if (header.style.display === "none") {
		header.style.display = "block";
	} else {
		header.style.visibility = "hidden";
		header.style.display = "flex";
		home.style.display = "block";
		home.style.display = "flex";
	}
}

