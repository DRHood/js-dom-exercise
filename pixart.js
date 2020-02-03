let brush = document.querySelector("div.brush");
let button = document.getElementById("set-color");

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

function genSquares() {
    for(i = 0; i < 20; i++) {
        let square = document.createElement("div");
        square.innerHTML = "<div class=\"square\"></div>";
        document.body.appendChild(square); 
    }
}
genSquares()