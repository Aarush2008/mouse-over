// Mouse Over Challenge

// Setup Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 500;
cnv.height = 500;

// Global Variables
let bx = 75;
let by = 250;
let bl = 140;
let bw = 50;

let ox = 350;
let oy = 275;
let or = 26;

requestAnimationFrame(draw);
function draw() {
  // Draw Background
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, 500, 500);

  // Draw Red Rectangle
  ctx.fillStyle = "red";
  ctx.fillRect(75, 100, 140, 50);

  // Draw Green Circle
  ctx.beginPath();
  ctx.fillStyle = "green";
  ctx.arc(350, 125, 26, 0, 2 * Math.PI);
  ctx.fill();

  // Draw Blue Rectangle
  ctx.beginPath();
  ctx.fillStyle = "blue";
  ctx.rect(bx, by, bl, bw);
  ctx.fill();

  // Draw Orange Circle
  ctx.beginPath();
  ctx.fillStyle = "orange";
  ctx.arc(ox, oy, or, 0, 2 * Math.PI);
  ctx.fill();

  document.addEventListener("mousemove", mousemove);

  function mousemove(e) {
    // Mouse Coordinates
    const mx = e.clientX - cnv.offsetLeft;
    const my = e.clientY - cnv.offsetTop;

    // Variables for Moving Shapes
    let bxx = bx + bl;
    let byy = by + bw;

    // Green Circle Distance
    let ag = mx - 350;
    let bg = my - 125;
    let cg = Math.sqrt(ag * ag + bg * bg);

    // Orange Circle Distance
    let ao = mx - ox;
    let bo = my - oy;
    let co = Math.sqrt(ao * ao + bo * bo);

    // If Statement
    if (mx > 75 && mx < 215 && my > 100 && my < 150) {
      document.body.style.backgroundColor = "red";
    } else if (mx > bx && mx < bxx && my > by && my < byy) {
      document.body.style.backgroundColor = "blue";
      bx = Math.floor(Math.random() * 399) + 1;
      by = Math.floor(Math.random() * 399) + 1;
      bl = Math.floor(Math.random() * 99) + 1;
      bw = Math.floor(Math.random() * 99) + 1;
    } else if (cg < 26) {
      document.body.style.backgroundColor = "green";
    } else if (co < or) {
      document.body.style.backgroundColor = "orange";
      or = Math.floor(Math.random() * 99) + 1;
      ox = Math.floor(Math.random() * 499) + 1;
      oy = Math.floor(Math.random() * 499) + 1;
    }
  }

  requestAnimationFrame(draw);
}
