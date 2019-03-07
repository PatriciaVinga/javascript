
$(document).ready(function(){
  $("ul li:first").click(function(){
    $("ul li:first").hide();
  });
});

$(document).ready(function(){
  $("button#hide").click(function(){
    $(".weAreOne").fadeOut(4000);
  });
});


$(document).ready(function(){
  $("button#show").click(function(){
    $(".weAreOne").fadeIn(7000);
  });
});


$(document).ready(function(){
  $("button#show").dbclick(function(){
    $("ul li:first").show();
  });
});
