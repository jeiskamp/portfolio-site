// Circle Pack

// Global Variables
const viewLength = 500;
const viewWidth = 500;
let circles = [];
z = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  getCircles();
  
  // Lets make a Color Palette
  // Bianchi Green
  bianchi1 = color('#47D6BE')
  bianchi2 = color('#5ADAC5')
  bianchi3 = color('#6EDFCC')
  bianchi4 = color('#81E3D3')
  bianchi5 = color('#94E7DA')
  bianchi6 = color('#37BFA8')
  bianchiBG = color('#CFF4EE')
  
  // Lets set our colors into an Array
  // Bianchi
  colors = [bianchi1, bianchi2, bianchi3, bianchi4, bianchi5, bianchi6];

  noLoop();
}

// Are the circles over lapping?
const overLapping = (x, y, r, z) => {
  let overLap = false;
  for (var i = 0; i < circles.length; i++) {
    let c = circles[i];
    const d = dist(x, y, c.x, c.y);
    const rTotal = r + c.r;
    // Circles are over lapping
    if (d < rTotal) {
      overLap = true;
    }
  }
  // Circles are not over lapping
  if (!overLap) {
    circles.push({ x: x, y: y, r: r, z: z });
  }
};

// Lets create some circles...
const getCircles = () => {
  const limit = viewWidth - viewWidth / 50;
  const originX = windowWidth / 2;
  const originY = windowHeight / 2;

  for (let i = 0; i < limit; i += 30) {
    for (let j = 0; j < 360; j += 1) {
      // How would we like our circles to look?
      var x = originX + (i * Math.sin((Math.PI * 1.99 * j) / 360)) / 1.99;
      var y = originY + (i * Math.cos((Math.PI * 1.99 * j) / 360)) / 1.99;
      var r = random(6, 60);

      // Get color for color array index. z = color
      z = int(random(0,6));
      overLapping(x, y, r, z);
    }
  }
};

function draw() {
  var count = 0;
  background(bianchiBG);

  // Draw Array via iteration
  for (var i = 0; i < circles.length; i++) {
    count = count + 1;
    noStroke();
    fill(colors[circles[i].z]);
    ellipse(circles[i].x, circles[i].y, circles[i].r * 1.99);
  }
}
