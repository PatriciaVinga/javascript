$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown(7000);
  });
});


$(document).ready(function(){
  $("button#panelUp").click(function(){
    $("#panel").slideUp(7000);

  });
});


$(document).ready(function(){
  $("button#panelStop").click(function(){
    $("#panel").stop();

  });
});

$("#panel").css("background-color", "#00ffff")

alert("Hi, I'm an alert");
