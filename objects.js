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


var pickUp = {
  brand: "Nissan",
  make: "Hard Body",
  type: "Pick Up Truck",
  color: "grey",
  yearOfRelease: 2003
};


var cars = [car, rangeRover];
cars.splice(0, 0, pickUp);
var i = 0;

var text = " ";
var text1 = "This is a ";
var text2 = " It is a ";




do {

  text += text1 + cars[i].brand + " car called a " + cars[i].make + "!" + "<br>" + text2 +
   cars[i].type + " which is " + cars[i].color + " and was released in " +
   cars[i].yearOfRelease + "</br>" + "<br>";
   i++;
}

while(i<cars.length)


$(document).ready(function(){
  $("button#show").click(function(){
    $("#demo").fadeIn(3000);
  });
});



document.getElementById("demo").innerHTML=text;
