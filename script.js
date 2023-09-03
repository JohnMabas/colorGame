let numSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

init();

function init() {
        //Mode buttons event listeners
        for(let i = 0; i < modeButtons.length; i++) {
            modeButtons[i].addEventListener("click", function (){
                modeButtons[0].classList.remove("selected");
                modeButtons[1].classList.remove("selected");
                this.classList.add("selected");
                this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
                reset(); 
        });  
    } 

    for(i = 0; i < squares.length; i++){
        // add click listeners to squares
        squares[i].addEventListener("click", function () {
        //grab color fo clicked squres
        let clickedcolor = this.style.background;
        //compare color to pickedColor
        if(clickedcolor === pickedColor) {
            messageDisplay.textContent = "correct!";
            resetButton.textContent = "Play Again"
            changeColor(clickedcolor);
            h1.style.background = clickedcolor; 
        } else{
            this.style.background ="#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
 }
  reset();
}



function reset() {
     //generate all new colors
     colors = generateRondomColors(6);
     //pick a new random color from array
     pickedColor = pickColor();
     //change colorDisplay to match picked color
     colorDisplay.textContent = pickedColor;
     resetButton.textContent = "New Colors";
     messageDisplay.textContent = "";
     //change colors of squares
     for(let i = 0; i < squares.length; i++) {
         if(colors[i]) {
             squares[i].style.display = "block";
             squares[i].style.background = colors[i];
         } else {
             squares[i].style.display = "none";
         }
     }
     h1.style.background = "steelblue";
}


    resetButton.addEventListener("click", function () {
    reset();
    })
 
    function changeColor(color) {
        //loop through all squares
        for(let i = 0; i < squares.length; i++)
        //change each color to match given color
        squares[i].style.background = color;

    }

    function pickColor() {
        let random = Math.floor(Math.random() * colors.length);
        return colors[random];
    }

    function generateRondomColors(num) {
        //make an array 
        let arr = []
        //repear num times
        for(let i = 0; i < num; i++ ) {
            arr.push(randomColor());
        //get randon colors and push into array

        }
        //return that array
        return arr;
    }

    function randomColor() {
        //pick a "red" from 0- 255
        let r = Math.floor(Math.random() * 256);
        //pick a "green" from 0- 255
        let g = Math.floor(Math.random() * 256);
        //pick a "blue" from 0- 255
        let b = Math.floor(Math.random() * 256);
        return "rgb("+ r + ", " + g + ", " + b +")"

    }

