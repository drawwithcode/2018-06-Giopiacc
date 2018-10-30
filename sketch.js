var myData;
var astro = [];
var img;
var img1;
var img2;

var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var img9;
var img10;
var img11;
var sfondo;

var t = 0;

function preload() {
  // put preload code here
  img = loadImage("./assets/aries.png");
  img1 = loadImage("./assets/taurus.png");
  img2 = loadImage("./assets/gemini.png");
  img3 = loadImage("./assets/cancer.png");
  img4 = loadImage("./assets/leo.png");
  img5 = loadImage("./assets/virgo.png");
  img6 = loadImage("./assets/libra.png");
  img7 = loadImage("./assets/scorpio.png");
  img8 = loadImage("./assets/sagittarius.png");
  img9 = loadImage("./assets/capricornus.png");
  img10 = loadImage("./assets/aquarius.png");
  img11 = loadImage("./assets/pisces.png");
  sfondo = loadImage("./assets/Cielo-Stellato.jpg");



  // img2 = loadImage('./assets/space.jpg');
  myData = loadJSON('./assets/zodiac.json');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('EB Garamond');

  // var astroNumber = 5;

  // for (var i = 0; i < myData.western_zodiac.length; i++) {

    var space = myData.western_zodiac[0];


    var x = width/5;
    var y = height/5 ;
    var w = 150;
    var h = 150;
    var size = space.element;
    var name = space.name;
    var title = space.element;

    var myAstros = new Astros(img, x, y, w, h, name, title, size);


    astro.push(myAstros);

    var space = myData.western_zodiac[1];

    var x = width/5 + 190;
    var y = height/5;
    var w = 150;
    var h = 150;
    var size = space.element;
    var name = space.name;
    var title = space.element;

    var myAstros = new Astros(img1, x, y, w, h, name, title, size);


    astro.push(myAstros);

    var space = myData.western_zodiac[2];

    var x =  width/5 + 380;
    var y = height/5;
    var w = 150;
    var h = 150;
    var size = space.element;
    var name = space.name;
    var title = space.element;

    var myAstros = new Astros(img2, x, y, w, h, name, title, size);


    astro.push(myAstros);

    var space = myData.western_zodiac[3];

    var x =  width/5 + 570;
    var y = height/5;
    var w = 150;
    var h = 150;
    var size = space.element;
    var name = space.name;
    var title = space.element;

    var myAstros = new Astros(img3, x, y, w, h, name, title, size);


    astro.push(myAstros);

    var space = myData.western_zodiac[4];

    var x = width/4;
    var y = height/3 + 90;
    var w = 150;
    var h = 150;
    var size = space.element;
    var name = space.name;
    var title = space.element;

    var myAstros = new Astros(img4, x, y, w, h, name, title, size);


    astro.push(myAstros);

    var space = myData.western_zodiac[5];

    var x = width/4 + 190;
    var y = height/3 + 90;
    var w = 150;
    var h = 150;
    var size = space.element;
    var name = space.name;
    var title = space.element;

    var myAstros = new Astros(img5, x, y, w, h, name, title, size);


    astro.push(myAstros);

    var space = myData.western_zodiac[6];

    var x = width/4 + 380;
    var y = height/3 + 90;
    var w = 150;
    var h = 150;
    var size = space.element;
    var name = space.name;
    var title = space.element;

    var myAstros = new Astros(img6, x, y, w, h, name, title, size);


    astro.push(myAstros);

    var space = myData.western_zodiac[7];

    var x = width/4 + 570;
    var y = height/3 + 90;
    var w = 150;
    var h = 150;
    var size = space.element;
    var name = space.name;
    var title = space.element;

    var myAstros = new Astros(img7, x, y, w, h, name, title, size);


    astro.push(myAstros);

    var space = myData.western_zodiac[8];

    var x = width/5;
    var y = height/2 + 170;
    var w = 150;
    var h = 150;
    var size = space.element;
    var name = space.name;
    var title = space.element;

    var myAstros = new Astros(img8, x, y, w, h, name, title, size);


    astro.push(myAstros);

    var space = myData.western_zodiac[9];

    var x = width/5 + 190;
    var y = height/2 + 170;
    var w = 150;
    var h = 150;
    var size = space.element;
    var name = space.name;
    var title = space.element;

    var myAstros = new Astros(img9, x, y, w, h, name, title, size);


    astro.push(myAstros);

    var space = myData.western_zodiac[10];

    var x = width/5 + 380;
    var y = height/2 + 170;
    var w = 150;
    var h = 150;
    var size = space.element;
    var name = space.name;
    var title = space.element;

    var myAstros = new Astros(img10, x, y, w, h, name, title, size);


    astro.push(myAstros);

    var space = myData.western_zodiac[11];

    var x = width/5 + 570 ;
    var y = height/2 + 170;
    var w = 150;
    var h = 150;
    var size = space.element;
    var name = space.name;
    var title = space.element;

    var myAstros = new Astros(img11, x, y, w, h, name, title, size);


    astro.push(myAstros);
  }




function draw() {
 image(sfondo,0,0,width,height);

 textAlign(CENTER);
 textSize(37);
 textStyle(ITALIC);
 fill(255);
 text('Press the mouse ',width/4 + 890,height/3+200);
 text('to know the elements! ',width/4 + 890,height/3+230);


  for (var j = 0; j < astro.length; j++) {
    // astro[j].move();
    astro[j].display();
  }

}


function Astros(img, _x, _y, _w, _h, _label, _newLabel, _lab) {
  this.img = img
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
    image(this.img, this.x, this.y, this.w, this.h);

    if (mouseIsPressed == true){
      textAlign(CENTER);
      textSize(25);
      fill(255);
      text(this.lab, this.x, this.y);
    }else {
      textAlign(CENTER);
      textSize(25);
      textStyle(BOLD);
      fill(255);
      text(this.label, this.x, this.y);

    }

  }

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}
