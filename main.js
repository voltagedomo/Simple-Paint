// Simple Paint

// Set Up canvas and graphics context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let mouseIsPressed = false;
let mouseX, mouseY, pmouseX, pmouseY;
let size = 5;
let penColor = "black";
// Main Program Loop (60 FPS)
requestAnimationFrame(loop);
function loop() {

    // Draw Circle if mouse pressed
    if (mouseIsPressed) {
        ctx.strokeStyle = penColor;
        ctx.lineWidth = size;
        ctx.beginPath();
        ctx.moveTo(pmouseX, pmouseY);
        ctx.lineTo(mouseX, mouseY);
        ctx.stroke();
    }

    requestAnimationFrame(loop);
}

// Event Stuff
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);
document.addEventListener("mousemove", mousemoveHandler);
document.addEventListener("keydown", keydownHandler);

function mousedownHandler(event) {
    mouseIsPressed = true;
}

function mouseupHandler() {
    mouseIsPressed = false;
}

function mousemoveHandler(event) {
    // Save previous mouseX and mouseY
    pmouseX = mouseX;
    pmouseY = mouseY;

    // Update mouseY and mouseY
    let cnvRect = cnv.getBoundingClientRect();
    mouseX = event.x - cnvRect.x;
    mouseY = event.y - cnvRect.y;
}

function keydownHandler(event) {
    // console.log(event.code); // Shows pressed keys

    if (event.code == "Space") {
        // Draw Background
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, cnv.width, cnv.height)
    } else if (event.code == "ArrowUp") {
        size++;
    } else if (event.code == "ArrowDown") {
        size--;
        if (size < 0) {
            size = 0;
        }
    } else if (event.code == "Digit1") {
        penColor = "red";
    } else if (event.code == "Digit2") {
        penColor = "green";
    } else if (event.code == "Digit3") {
        penColor = "blue";
    }
}

// Color Events
document.getElementById("redBtn").addEventListener("click", setRed);
document.getElementById("greenBtn").addEventListener("click", setGreen);
document.getElementById("blueBtn").addEventListener("click", setBlue);
document.getElementById("colorPicker").addEventListener("change", changeColor);

function setRed() {
    penColor = "red";
}

function setGreen() {
    penColor = "green";
}

function setBlue() {
    penColor = "blue";
}

function changeColor() {
    penColor = document.getElementById("colorPicker").value;
}