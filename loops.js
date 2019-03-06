var students=["Spa", "Rumbi", "Shalom", "Vimbai", "Tau", "Joy",
"Melody", "Tatenda", "Gracious", "Yvonne", "Fortunate", "Patricia"];

var text = "<ul>";

for (var i = 0; i < students.length; i++) {
    text +=  "<li>" + students[i] + "</li>";
}
text += "</ul>";

document.getElementById("demo").innerHTML = text;
