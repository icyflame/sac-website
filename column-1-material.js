$(document).ready(function(){

  $(".col-divs").each(function(){

    $(this).addClass("waves-effect");

  });

  Waves.displayEffect();

  $(".header-list-1 div").on("click", function(){
    $(".header-list-1").removeClass("col-md-4").addClass("col-md-2");
    $(".header-list-2").removeClass("col-md-4").addClass("col-md-8");
    $(".header-list-3").removeClass("col-md-4").addClass("col-md-2");
    $(".header-list-2").addClass("overflowscroll");
    $(".header-list-2").hide();
    $(".header-list-2").load($(this).attr("data-holder") + ".html");
    $(".header-list-2").fadeToggle(1000);
  });

});
