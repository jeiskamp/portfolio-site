//var counter;
let fft;
let mic;
var amp;
var video;

var vScale = 12;

function setup() {
  //Video settings
  createCanvas(windowWidth, windowHeight);
  pixelDensity(.5);
  video = createCapture(VIDEO);
  video.size(width / vScale, height / vScale);
  
  //Mic settings
  fft = new p5.FFT();
  mic = new p5.AudioIn();
  mic.start();
  fft.setInput(mic);
  amp = 3;
  
}

function draw() {
  //Video settings
  background(0);
  video.loadPixels();
  
  //Mic settings
  let spectrum = fft.analyze();
	
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = (video.width - x + 1 + (y * video.width)) * 4;
      var r = video.pixels[index + 0];
      var g = video.pixels[index + 1];
      var b = video.pixels[index + 2];
      
      var bright = (r + g + b) / 3;
      var w = map(bright, 0, 255, 0, vScale);

      fill(spectrum[y*2] , 0, spectrum[x*2]);
      rectMode(CENTER);
      rect(x * vScale, y * vScale, w, w);
    }
  }

}