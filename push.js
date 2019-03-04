var things=[23 , "Cars ", "Harvey ", 11,];
things.push("twelve ");

document.getElementById("demo").innerHTML="<ul>" + "<li>" + things[2] + "</li>" + "<li>" + "has" + "</li>" + "<li>" + things[4] + "(" + (things[0]-things[3]) + ")" + "</li>" + "<li>" + things[1] + "</li>" + "</ul>";
