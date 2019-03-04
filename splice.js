var cars=[" BMW" , " Peugot", " Benz", " Skoroskoro", " Toyota"];


cars.splice(4, 0, " Altezza");
document.getElementById("demo").innerHTML= cars.toString();
