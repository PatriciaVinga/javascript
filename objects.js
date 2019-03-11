var car = {
  brand: "Toyota",
  make: "Corolla",
  type: "Sedan",
  color: "blue",
  yearOfRelease: 1997
};


var rangeRover ={
  brand: "Range Rover",
  make: "Sport",
  type: "SUV",
  color: "white",
  yearOfRelease: 2010
};


var cars = [car, rangeRover];

var text = "This is a "
var text2 = " It is a "

for (var i=0; i<cars.length; i++){
  text += cars[i].brand + " car called a " + cars[i].make + "!" + "<br>" + text2 +
   cars[i].type + " which is " + cars[i].color + " and was released in " +
   cars[i].yearOfRelease + "</br>" + "<br>";

};

document.getElementById("demo").innerHTML=text;
