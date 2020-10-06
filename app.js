const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");

canvas.width = 450;
canvas.height = 450;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;

  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }

  //console.log(x, y);
}

function onMouseDown(event) {
  startPainting();
}

function onMouseUp(event) {
  stopPainting();
}

function onMouseLeave(event) {
  stopPainting();
}

function handleColorClick(event) {
  console.log(event.target.style);
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", onMouseLeave);
  canvas.addEventListener;
}

console.log(Array.from(colors));

Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColorClick)
);
