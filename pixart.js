let brush = document.querySelector("div.brush");
let button = document.getElementById("set-color");
let squares = document.getElementsByClassName("square");

// set colorVal to "brush"
function changeColor() {
    brush.style.background = colorVal(); 
}
// get color value from text input
const colorVal = function() {
    // select the input element and get its value 
    let inputVal = document.getElementById("color-field").value;
    return inputVal;
}
button.addEventListener('click', changeColor);

// generate squares
function genSquares() {
    for(let i = 0; i < 20; i++) {
        let square = document.createElement("div");
        square.innerHTML = "<div class=\"square\"></div>";
        document.body.appendChild(square); 
    }
}
genSquares();

// turn squares green when clicked
let squ = document.querySelectorAll('.square');

let clicked = document.querySelectorAll('.square');
for (let i = 0; i < clicked.length; i++) {    
    clicked[i].addEventListener('click', ((j) => {         
    return function() {
        squ[j].style.background = "green";
    }
  })(i))
}