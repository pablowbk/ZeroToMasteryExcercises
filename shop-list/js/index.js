var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var box = document.getElementsByClassName("box");

window.onload = function() {
  input.focus();
}

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li"); //creates LI
    var span = document.createElement("span"); // creates Span
    var btn = document.createElement("button");  // creates button tag
    span.textContent = input.value; //adds text to span tag based on input.value
    btn.textContent = "x"; 
    btn.setAttribute("class", "box");    
    //li.appendChild(document.createTextNode(input.value));
    li.appendChild(span); // adds the span inside the LI
    li.appendChild(btn); // adds the button inside the LI
    ul.appendChild(li); // appends the LI to the UL
    input.value = ""; 
    for (var i = 0; i < box.length; i++) {
      var delLi = box[i];
      delLi.addEventListener('click', function(event) {
      event.target.parentNode.remove();
      })
    }
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// Exercise items

//create line-through when cicked


/*ul.addEventListener('click', function(event) {
    event.target.classList.toggle("done");
});*/

var spans = document.getElementsByTagName('span');


for(var i = 0, l = spans.length; i < l; i++){
    var span = spans[i];
  span.addEventListener('click', function(event) {
    event.target.classList.toggle("done");

});
} 

for (var i = 0; i < box.length; i++) {
      var delLi = box[i];
      delLi.addEventListener('click', function(event) {
      event.target.parentNode.remove();
      })
    }