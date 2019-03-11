var car = {
  brand: "Toyota",
  make: "Corolla",
  type: "Sedan",
  color: "blue",
  yearOfRelease: 1997
};

document.getElementById("demo").innerHTML="This is a " + car.brand + " car called a " + car.make + "!";
document.getElementById("demo2").innerHTML="It is a " + car.type + " and was released in " + car.yearOfRelease + ".";
