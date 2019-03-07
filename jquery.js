
$(document).ready(function(){
  $("ul li:first").click(function(){
    $("ul li:first").hide();
  });
});

$(document).ready(function(){
  $("button#hide").click(function(){
    $(".weAreOne").hide();
  });
});


$(document).ready(function(){
  $("button#show").click(function(){
    $(".weAreOne").show();
  });
});
