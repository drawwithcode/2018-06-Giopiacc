var myData;
var astro = [];
var img;
var img2;

var t = 0;

function preload() {
  // put preload code here
  img = loadImage("./assets/astro.png");
  img2 = loadImage('./assets/space.jpg');
  myData = loadJSON('./assets/peopleinspace.json');

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  var astroNumber = 5;

  for (var i = 0; i < myData.people.length; i++) {

    var space = myData.people[i];

    var x = random(0, width);
    var y = random(0, height);
    var w = 150;
    var h = 150;
    var size = space.careerdays;
    var name = space.name;
    var title = space.title;

    var myAstronaut = new Astronaut(x, y, w, h, name, title, size);

    myAstronaut.speed = random(1, 3)
    astro.push(myAstronaut);
  }
}



function draw() {
 image(img2, 0, 0, width, height);

  for (var j = 0; j < astro.length; j++) {
    astro[j].move();
    astro[j].display();
  }

}


function Astronaut(_x, _y, _w, _h, _label, _newLabel, _lab) {
  this.x = _x
  this.y = _y
  this.w = _w
  this.h = _h
  this.label = _label
  this.newLabel = _newLabel
  this.lab = _lab
  this.speed = 10;


  var yDir = 1;
  var xDir = 1;

  this.display = function() {
    image(img, this.x, this.y, this.w, this.h);

    if (mouseIsPressed == true){
      textAlign(CENTER);
      textSize(20);
      fill(255);
      text(this.lab, this.x, this.y);
    }else {
      textAlign(CENTER);
      textSize(30);
      textStyle(BOLD);
      fill(255);
      text(this.label, this.x, this.y);

    }

  }

  this.move = function() {
    this.x += this.speed * xDir;
    this.y += this.speed * yDir;

    if (this.y > height || this.y < 0) {
      yDir = yDir * -1;
    }
    if (this.x > width || this.x < 0) {
      xDir = xDir * -1;
    }
  }

  this.clicked = function() {
    var d = dist(mouseX, mouseY, this.x, this.y);
    if (d < 150) {
      return true;
    } else {
      return false;
    }
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}
