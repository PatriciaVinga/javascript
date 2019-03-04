var cars=[" BMW" , " Benz", " Toyota",];

document.getElementById("demo").innerHTML= "There are " + cars.length + " cars..." + cars.toString();

cars.unshift(" Lexus");
document.getElementById("demo01").innerHTML= "There are now " + cars.length + " cars..." + cars.toString();

cars.shift();
document.getElementById("demo02").innerHTML= "There are " + cars.length + " cars..." + cars.toString();

cars.shift();
document.getElementById("demo02").innerHTML= "There are " + cars.length + " cars..." + cars.toString();
