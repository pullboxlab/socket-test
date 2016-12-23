var socket;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(51);  
  socket = io.connect('https://node.pullboxlab.com');
  socket.on('sensorMsg', newDrawing);

}



function newDrawing(data8) {
  background(51);
  //var socketData = data8 * 2;
  fill(255);
  ellipse(windowWidth / 2, windowHeight / 2, data8.x, data8.x);

  console.log(data8.x);
}
