var socket;

function setup() {
  createCanvas(windowWidth, windowHeight);


  socket = io.connect('http://192.168.0.146:8080');
  socket.on('socketData', draw);
}

function newDrawing() {

}

function draw() {
  background(51);
  var accX = accelerationX * 10;
  var colX = color(accX, 0, 255);
  var rotX = rotationY * 4

  fill(colX);
  stroke(colX);
  //line(accX, 10, accX, 100);
  ellipse(windowWidth / 2, windowHeight / 2, rotX, rotX);

  var data8 = {
    x: rotX,
    y: accX
  }

  socket.emit('sensorMsg', data8);

}
