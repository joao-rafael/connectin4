var mainCanvas = document.getElementById("mainCanvas");
mainC
var mainContext = mainCanvas.getContext("2d");
var divWidth = mainCanvas.width;
var divHeight = mainCanvas.height;
var angle = 0;

var requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;

function drawCircle() {
    mainContext.clearRect(0, 0, divWidth, divHeight);
    // color in the background
    mainContext.fillStyle = "#EBC476";
    mainContext.fillRect(0, 0, divWidth, divHeight);
    // draw the circle
    mainContext.beginPath();
    var radius = 25 + 150 * Math.abs(Math.cos(angle));
    mainContext.arc(225, 225, radius, 0, Math.PI * 2, false);
    mainContext.closePath();
    // color in the circle
    mainContext.fillStyle = "#006699";
    mainContext.fill();
    angle += Math.PI / 64;
    requestAnimationFrame(drawCircle);
}
drawCircle();
