const canvas = document.querySelector("#canvas");

const defaultCanvasPixelSize = 16;
const canvasSize = 500;

for (let i = 0; i < defaultCanvasPixelSize; i++) {
  const pixel = document.createElement("div");

  pixel.setAttribute("id", "pixel" + i.toString());
  pixel.setAttribute("class", "pixel");
  canvas.appendChild(pixel);
  console.log("ya");
}
