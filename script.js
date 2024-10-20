window.addEventListener("load", pageLoaded, false);
function pageLoaded() {
  canvasApp();
}

function canvasApp() {
  const cvs = document.querySelector("canvas");
  const ctx = cvs.getContext("2d");
  const block = 20; //parts of snake

  //width && height of canvas
  const width = cvs.width;
  const height = cvs.height;

  //function calls
  draw();

  function draw() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, width, height);
    grid('#eee');
  }

  function grid(color) {
    ctx.strokeStyle = color;
    for (let y = 0; y < height / block; ++y) {
      for (let x = 0; x < width / block; ++x) {
        ctx.strokeRect(x * block, y * block, block, block);
      }
    }
  }
}
