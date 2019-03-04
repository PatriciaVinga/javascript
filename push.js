var cars=["BMW" , " Benz", " Toyota",];

document.getElementById("demo").innerHTML= "There are " + cars.length + " cars..." + cars.toString();

cars.push(" Land Rover ");
document.getElementById("demo01").innerHTML= "There are now " + cars.length + " cars..." + cars.toString();

cars.pop();
document.getElementById("demo02").innerHTML= "There are now " + cars.length + " cars..." + cars.toString();

cars.pop();
document.getElementById("demo02").innerHTML= "There are now " + cars.length + " cars..." + cars.toString();
