var cars=["Benz","BMW", "Audi", "Volkswagen", "Ruf"];
var i = 0;
var text = "<ul>";

cars.pop();
do {
    text +=  "<li>" + cars[i]  + "</li>";
    i++;
}
while(i<cars.length)

text += "</ul>";

document.getElementById("demo").innerHTML = text;
