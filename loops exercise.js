var cars=["Benz","BMW", "Audi", "Volkswagen", "Ruf"];

var text = "<ul>";

cars.pop();
for (var i = 0; i < cars.length; i++) {
    text +=  "<li>" + cars[i]  + "</li>";
}
text += "</ul>";

document.getElementById("demo").innerHTML = text;
