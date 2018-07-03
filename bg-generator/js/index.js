var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var h3 = document.querySelector("h3");
var body = document.getElementById("gradient");
var btn = document.getElementById("btn");

function setGradient() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  h3.textContent = body.style.background + ";";  //add css bg info for copy&paste
};

function getRandom() {
  return '#' + (function co(lor) {
		return (lor +=
			[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'][Math.floor(Math.random() * 16)])
			&& (lor.length == 6) ? lor : co(lor);
	})('');
  //return "#"+ Math.floor(Math.random()*16777215).toString(16); //did not work, would return 000000 often
};

function randomize() {
  color1.value = getRandom();
  color2.value = getRandom();
  setGradient();
};

  /*
  var r = Math.floor(Math.random()*256);          // Random between 0-255
  var g = Math.floor(Math.random()*256);          // Random between 0-255
  var b = Math.floor(Math.random()*256);          // Random between 0-255
  var rgb1 = 'rgb(' + r + ',' + g + ',' + b + ')'; // Collect all to a string
  
  var r2 = Math.floor(Math.random()*256);          
  var g2 = Math.floor(Math.random()*256);         
  var b2 = Math.floor(Math.random()*256);
  var rgb2 = 'rgb(' + r2 + ',' + g2 + ',' + b2 + ')';
  console.log(rgb1);
  console.log(rgb2);
  */

//listeners
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

window.addEventListener("load", randomize);   //match background colors to input values on page load, "randommed"

btn.addEventListener("click", randomize);