$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown(10000);
  });
});


$(document).ready(function(){
  $("button#panelUp").click(function(){
    $("#panel").slideUp("slow");

  });
});


$(document).ready(function(){
  $("button#panelStop").click(function(){
    $("#panel").stop();

  });
});
